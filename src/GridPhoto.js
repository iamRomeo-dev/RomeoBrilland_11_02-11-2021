export const GridPhoto = ({ data }) => {
  return (
    <>
      <li className="relative h-60 col-span-1 flex flex-col  md:h-72 lg:h-80 xl:h-96">
        <img
          src={data.cover}
          alt={data.title}
          className="object-cover h-full rounded-xl"
        />
        <span className="absolute bottom-5 left-5 text-sm font-normal tracking-normal text-white tk-brandon-grotesque">
          {data.title}
        </span>
      </li>
    </>
  );
};
