import { useState } from "react";

import { Input } from "components/common/input";
import { Button } from "components/common/button";

import "./styles.scss";

export const Status = () => {
  const [isDisable, setIsDisable] = useState(true);
  const [status, setStatus] = useState("Все буде Україна!");

  const handleChangeEdit = (event) => {
    setStatus(event.target.value);
  };

  const handleClickSave = () => {
    setIsDisable((prevState) => !prevState);
  };

  return (
    <div className="form-status">
      <Input
        type="text"
        value={status}
        disabled={isDisable}
        onChange={handleChangeEdit}
      />
      <Button
        type="status"
        onClick={handleClickSave}
        label={isDisable ? "Змінити статус" : "Зберегти"}
      />
    </div>
  );
};
