import { useField } from "formik";

import { renderInputByType } from "utils/render-input-by-type";

import "./styles.scss";

export const Row = ({
  name,
  inputType,
  description,
  label,
  touched,
  errors,
}) => {
  const [field] = useField(name);
  const isError = touched[name] && errors[name];

  return (
    <div className="row row_small-padding">
      <label className="row__label" htmlFor={name}>
        {label}
      </label>
      <div className="row__field">
        {renderInputByType(inputType, field, isError)}
        {isError && <div className="row__error">{errors[name]}</div>}
      </div>
      <span className="row__description">{description}</span>
    </div>
  );
};
