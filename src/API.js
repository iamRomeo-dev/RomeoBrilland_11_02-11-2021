const url = "https://iamromeo-dev.github.io/bbbbbbb/data.json";

export const fetchAccommodation = async () => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

// Filter the accomodation with the id of the accomodation is equal to the userId
export const fetchAccomodationById = async (id) => {
  const res = await fetch(url);
  const json = await res.json();
  return json.filter((accomodation) => {
    return accomodation.id === id;
  })[0];
};
