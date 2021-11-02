import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Header } from "./Header";
import { Banner } from "./Banner";
import { fetchAccomodationById } from "./API";

export const Accomodation = () => {
  const { userId } = useParams(); // <- Get back the id from the url, given in the path (:userId)

  const { data: accomodation, status } = useQuery(
    `fetchAccomodationById/${userId}`,
    async () => fetchAccomodationById(userId) // <- async () => Car je ne veux pas exécuter la fonction fetchPhotographerById(parseInt(userId)), alors je la déclare. ParseInt permet de mettre userId en Integer
  );
  console.log(accomodation);
  return (
    <>
      <Header />
      <Banner />
      <h1>{accomodation.title}</h1>{" "}
    </>
  );
};
