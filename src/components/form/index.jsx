import { useState, useMemo } from "react";
import dayjs from "dayjs";

import { Row } from "components/common/row";

import { Formik } from "formik";
import * as yup from "yup";

import "./styles.scss";
import { FIELD_NAMES, getFormFields } from "./config";

export const InfoForm = () => {
  const validationSchema = yup.object().shape({
    [FIELD_NAMES.city]: yup.string().required("Поле обов'язкове"),
    [FIELD_NAMES.password]: yup
      .string()
      .min(5, "Використовуйте щонайменше 5 символів")
      .required("Вкажіть пароль"),
    [FIELD_NAMES.confirmPassword]: yup
      .string()
      .oneOf([yup.ref(FIELD_NAMES.password)], "Паролі не співпадають")
      .required("Вкажіть пароль"),
    [FIELD_NAMES.email]: yup
      .string()
      .email("Неправильний E-mail")
      .required("Вкажіть E-mail"),
  });

  const [changeTime, setChangeTime] = useState(null);

  const formFields = useMemo(() => getFormFields(changeTime), [changeTime]);

  const onChangeTime = () => {
    const time = dayjs().format("DD MMM YYYY в HH:mm:ss");
    setChangeTime(time);
  };

  return (
    <div>
      <Formik
        initialValues={{
          [FIELD_NAMES.city]: "",
          [FIELD_NAMES.email]: "",
          [FIELD_NAMES.password]: "",
          [FIELD_NAMES.emailSending]: true,
          [FIELD_NAMES.confirmPassword]: "",
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
