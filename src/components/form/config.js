export const FIELD_NAMES = {
  city: "city",
  password: "password",
  confirmPassword: "confirmPassword",
  email: "email",
  emailSending: "emailSending",
};

export const getFormFields = (changeTime) => {
  const formFields = [
    {
      name: FIELD_NAMES.city,
      inputType: "select",
      description: "",
      label: "Ваше місто",
    },
    {
      name: FIELD_NAMES.password,
      inputType: "password",
      description: "Ваш новий пароль повинен містити не менше 5 символів.",
      label: "Пароль",
    },
    {
      name: FIELD_NAMES.confirmPassword,
      inputType: "password",
      description:
        "Повторіть пароль, будь ласка, це убезпечить вас з нами на випадок помилки.",
      label: "Пароль ще раз",
    },
    {
      name: FIELD_NAMES.email,
      inputType: "email",
      description: "Можна змінити адресу, вказану під час реєстрації.",
      label: "Електронна адреса",
    },
    {
      name: FIELD_NAMES.emailSending,
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

  return formFields;
};
