import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Grid from "./Grid";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Grid />
      </div>
    );
  }
}
export default Home;
