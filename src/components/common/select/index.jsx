import { citiesSelect } from "utils/cities-select";

import "./styles.scss";

export const Select = ({ data, field, isError }) => {
  const filterData = citiesSelect(data);

  return (
    <select
      className={`form-select ${isError && `form-select_error`}`}
      {...field}
    >
      <option value="" label="" />
      {filterData.map(({ city, population }) => (
        <option
          key={`${city}-${population}`}
          value={city}
          label={`${city} ${population}`}
        />
      ))}
    </select>
  );
};
