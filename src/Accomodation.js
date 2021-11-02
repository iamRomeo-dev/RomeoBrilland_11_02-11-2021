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
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <Header />
          <Banner />
          <div className="flex justify-between flex-wrap">
            <div>
              <h1 className="text-base md:text-3xl text-red-400 font-normal mt-6">
                {accomodation.title}
              </h1>
              <h3 className="text-xs md:text-lg text-red-400 font-normal">
                {accomodation.location}
              </h3>
            </div>
            <div className="flex justify-center items-center">
              <h3 className="text-xs md:text-lg text-red-400 font-normal">
                {accomodation.host.name}
              </h3>
              <div class="rounded-full bg-gray-200 h-16 w-16 flex items-center justify-center"></div>
            </div>
          </div>

          <ul className="flex gap-6">
            {accomodation.tags.map((tag, index) => (
              <li className="text-white bg-red-500 rounded-3xl px-2">{tag}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
