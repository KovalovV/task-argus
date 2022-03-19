import { useState } from "react";
import dayjs from "dayjs";

import { Row } from "components/common/row";

import { Formik } from "formik";
import * as yup from "yup";

import "./styles.scss";

export const InfoForm = () => {
  const validationSchema = yup.object().shape({
    city: yup.string().required("Поле обов'язкове"),
    password: yup
      .string()
      .min(5, "Використовуйте щонайменше 5 символів")
      .required("Вкажіть пароль"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Паролі не співпадають")
      .required("Вкажіть пароль"),
    email: yup.string().email("Неправильний E-mail").required("Вкажіть E-mail"),
  });

  const [changeTime, setChangeTime] = useState(null);
  console.log("onChangeTime", changeTime);

  const onChangeTime = () => {
    const time = dayjs().format("DD MMM YYYY в HH:mm:ss");
    setChangeTime(time);
  };

  const formFields = [
    {
      name: "city",
      inputType: "select",
      description: "",
      label: "Ваше місто",
    },
    {
      name: "password",
      inputType: "password",
      description: "Ваш новий пароль повинен містити не менше 5 символів.",
      label: "Пароль",
    },
    {
      name: "confirmPassword",
      inputType: "password",
      description:
        "Повторіть пароль, будь ласка, це убезпечить вас з нами на випадок помилки.",
      label: "Пароль ще раз",
    },
    {
      name: "email",
      inputType: "email",
      description: "Можна змінити адресу, вказану під час реєстрації.",
      label: "Електронна адреса",
    },
    {
      name: "emailSending",
      inputType: "checkbox",
      description: "",
      label: "Я згодний",
    },
    {
      name: "button",
      inputType: "button",
      description: changeTime
        ? `останні зміни ${changeTime}`
        : `зміни відсутні`,
      label: "",
    },
  ];

  return (
    <div>
      <Formik
        initialValues={{
          city: "",
          password: "",
          confirmPassword: "",
          email: "",
          emailSending: true,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onChangeTime();
          console.log(values);
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <form className="info-form" onSubmit={handleSubmit}>
            {formFields.map(({ name, inputType, description, label }) => (
              <Row
                key={name}
                name={name}
                label={label}
                errors={errors}
                touched={touched}
                inputType={inputType}
                description={description}
              />
            ))}
          </form>
        )}
      </Formik>
    </div>
  );
};
