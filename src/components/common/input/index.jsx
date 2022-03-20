import "./styles.scss";

export const Input = ({ onChange, value, disabled, type, field, isError }) =>
  type !== "text" ? (
    <input
      className={`form-input ${isError && `form-input_error`}`}
      type={type}
      {...field}
    />
  ) : (
    <div className="status">
      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={
          disabled ? `status__input` : `status__input status__input_active`
        }
      />
    </div>
  );
