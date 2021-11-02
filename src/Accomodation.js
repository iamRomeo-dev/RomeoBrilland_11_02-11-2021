import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Header } from "./Header";
import { Banner } from "./Banner";
import { fetchAccommodation, fetchPhotographerById } from "./API";
import { Link } from "react-router-dom";

export const Accomodation = () => {
  const { userId } = useParams(); // <- Get back the id from the url, given in the path (:userId)

  const { data: photographer, status } = useQuery(
    `fetchPhotographerById/${userId}`,
    async () => fetchPhotographerById(userId) // <- async () => Car je ne veux pas exécuter la fonction fetchPhotographerById(parseInt(userId)), alors je la déclare. ParseInt permet de mettre userId en Integer
  );
  console.log(photographer);
  return <></>;
};
