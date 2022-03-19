import { useState } from "react";

import Input from "components/common/input";
import Button from "components/common/button";

import "./styles.scss";

export const Status = () => {
  const [isDisable, setIsDisable] = useState(true);
  const [status, setStatus] = useState("Все буде Україна!");

  const onChangeEdit = (event) => {
    setStatus(event.target.value);
  };

  const onClickSave = () => {
    setIsDisable((prevState) => !prevState);
  };

  return (
    <form
      className="form-status"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        type="text"
        value={status}
        disabled={isDisable}
        onChange={onChangeEdit}
      />
      <Button
        type="status"
        onClick={onClickSave}
        label={isDisable ? "Змінити статус" : "Зберегти"}
      />
    </form>
  );
};
