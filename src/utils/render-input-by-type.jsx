import { Input } from "components/common/input";
import { Select } from "components/common/select";
import { Checkbox } from "components/common/checkbox";
import { Button } from "components/common/button";

import cities from "config/cities.json";

export const renderInputByType = (inputType = "text", field, isError) => {
  const checkboxLabel = "приймати актуальну інформацію на емейл";
  const buttonLabel = "Змінити";

  const inputs = {
    select: <Select data={cities} field={field} isError={isError} />,
    checkbox: <Checkbox field={field} label={checkboxLabel} />,
    button: <Button type="submit" label={buttonLabel} />,
  };

  return (
    inputs[inputType] || (
      <Input type={inputType} field={field} isError={isError} />
    )
  );
};
