import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Header } from "./Header";
import { Banner } from "./Banner";
import { StarFilledIcon } from "./Icons";
import { StarOutlinedIcon } from "./Icons";
import { fetchAccomodationById } from "./API";
import { DisplayStars } from "./DisplayStars";

export const SingleAccomodation = () => {
  const { userId } = useParams(); // <- Get back the id from the url, given in the path (:userId)

  const { data: accomodation, status } = useQuery(
    `fetchAccomodationById/${userId}`,
    async () => fetchAccomodationById(userId) // <- async () => Car je ne veux pas exécuter la fonction fetchPhotographerById(parseInt(userId)), alors je la déclare. ParseInt permet de mettre userId en Integer
  );
  return (
    <>
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <Header />
          <Banner />

          <div className="sm:flex justify-between flex-wrap mt-6">
            <div>
              <div>
                <h1 className="text-base md:text-3xl text-red-400 font-normal">
                  {accomodation.title}
                </h1>
                <h3 className="text-xs md:text-lg text-red-400 font-normal">
                  {accomodation.location}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2 mt-2">
                {accomodation.tags.map((tag, index) => (
                  <li className="text-white text-xs md:text-lg bg-red-500 rounded-3xl px-4 md:px-8">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div class="flex flex-row-reverse items-center justify-between gap-4">
              <div className="flex justify-center items-center">
                <h3 className="text-xs md:text-lg text-red-400 font-normal">
                  {accomodation.host.name}
                </h3>
                <div class="rounded-full bg-gray-200 h-12 w-12 ml-2 flex items-center justify-center"></div>
              </div>
              <DisplayStars rating={accomodation.rating} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
