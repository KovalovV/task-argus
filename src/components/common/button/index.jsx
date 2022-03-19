import "./styles.scss";

const Button = ({ onClick, type, label }) =>
  type === "submit" ? (
    <button className="form-button" type="submit">
      <span className="form-button__label">{label}</span>
    </button>
  ) : (
    <button className="form-status-button" type={type} onClick={onClick}>
      <span className="form-status-button__label">{label}</span>
    </button>
  );

export default Button;
