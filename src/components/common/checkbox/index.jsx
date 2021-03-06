import "./styles.scss";

export const Checkbox = ({ field, label }) => (
  <div className="form-checkbox">
    <input id={field.name} type="checkbox" {...field} />
    <label htmlFor={field.name} className="form-checkbox__label">
      {label}
    </label>
  </div>
);
