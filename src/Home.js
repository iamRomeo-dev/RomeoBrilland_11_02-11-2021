import React, { Component } from "react";
import Banner from "./Banner";
import Grid from "./Grid";

class Home extends Component {
  render() {
    return (
      <div>
        <Banner title={"Chez vous et partout ailleurs"} />
        <Grid />
      </div>
    );
  }
}
export default Home;
