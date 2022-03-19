export const citiesSelect = (data) => {
  const dataCopy = Array.from(data);

  const dataFiltered = dataCopy
    .sort((a, b) => a.city - b.city)
    .filter(({ population }) => population > 50000);

  const maxPopulationCityObj = dataFiltered.reduce(
    (prev, current) =>
      Number(prev.population) > Number(current.population) ? prev : current,
    {}
  );

  const result = dataFiltered.filter(
    ({ population }) => population !== maxPopulationCityObj.population
  );
  result.unshift(maxPopulationCityObj);

  return result;
};
