import { Formik } from "formik";
import * as yup from "yup";

import "./styles.scss";

export const InfoForm = () => {
  const validationSchema = yup.object().shape({
    city: yup.string().required("Поле обов'язкове"),
    password: yup.string().required("Вкажіть пароль"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Паролі не співпадають")
      .required("Вкажіть пароль"),
    email: yup.string().email("Неправильний E-mail").required("Вкажіть E-mail"),
  });

  return (
    <div>
      InfoForm
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
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          dirty,
          isValid,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="city">Ваше місто</label>
              <select
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="" label="" />
                <option value="red" label="red" />
                <option value="blue" label="blue" />
                <option value="green" label="green" />
              </select>
            </div>
            {touched.city && errors.city && <div>{errors.city}</div>}

            <div>
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <div>{errors.password}</div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword">Пароль ще раз</label>
              <input
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <div>{errors.confirmPassword}</div>
              )}
            </div>

            <div>
              <label htmlFor="email">Електронна адреса</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </div>

            <div>
              <label htmlFor="emailSending">Я згодний</label>
              <input
                type="checkbox"
                name="emailSending"
                value={values.emailSending}
                checked={values.emailSending}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <button disabled={!isValid && !dirty} type="submit">
              Змінити
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
