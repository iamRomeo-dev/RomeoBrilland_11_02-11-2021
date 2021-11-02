const url = "https://iamromeo-dev.github.io/bbbbbbb/data.json";

export const fetchAccommodation = async () => {
  const res = await fetch(url);
  const json = await res.json();
  console.log("111111111");
  console.log(json);
  return json;
};

// export const fetchMediaByPhotogrpaherId = async (id) => {
//   const res = await fetch(url);
//   const json = await res.json();
//   return json.media.filter((m) => m.photographerId === id);
// };

// Filter the accomodation with the id of the accomodation is equal to the userId
export const fetchPhotographerById = async (id) => {
  const res = await fetch(url);
  const json = await res.json();
  return json.filter((accomodation) => {
    return accomodation.id === id;
  })[0];
};
