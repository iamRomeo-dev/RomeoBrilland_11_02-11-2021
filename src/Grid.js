import { useQuery } from "react-query";
import { fetchAccommodation } from "./API";
import { GridPhoto } from "./GridPhoto";
import { data } from "./data";

export const Grid = () => {
  const { data, status } = useQuery("fetchAccommodation", fetchAccommodation);
  return (
    <>
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:bg-gray-100 rounded-xl gap-12 md:p-12 mt-24">
          {data.map((data, index) => (
            <GridPhoto data={data} />
          ))}
        </div>
      )}
    </>
  );
};
