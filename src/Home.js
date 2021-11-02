import { Header } from "./Header";
import { Banner } from "./Banner";
import { Grid } from "./Grid";

export const Home = () => {
  return (
    <>
      <div className="mx-6 sm:mx-24">
        <Header />
        <Banner />
        <Grid />
      </div>
    </>
  );
};
