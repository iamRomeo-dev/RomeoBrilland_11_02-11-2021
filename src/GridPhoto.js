export const GridPhoto = ({ data }) => {
  return (
    <>
      <li className="relative h-60 col-span-1 flex flex-col  md:h-72 lg:h-80 xl:h-96">
        <img
          src={data.cover}
          alt="new"
          className="object-cover h-full rounded-xl"
        />
      </li>

      {/* <li class="relative h-60 col-span-1 flex flex-col bg-red-200 rounded-xl md:h-72 lg:h-80 xl:h-96">
        <span class="absolute bottom-5 left-5 text-sm font-normal tracking-normal text-white tk-brandon-grotesque">
          {data.title}
        </span>
      </li> */}
    </>
  );
};
