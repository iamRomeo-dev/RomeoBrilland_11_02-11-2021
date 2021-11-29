import React, { Component } from "react";
import { Link } from "react-router-dom";

class Page404 extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center py-8 mt-6">
        <div className="text-red-400 text-9xl font-bold">404</div>
        <div className="text-red-400">
          Oups ! La page que vous avez demandé n'existe pas.
        </div>
        <Link to="/" className="text-red-400 underline mt-10">
          Retournez sur page d'accueil
        </Link>
      </div>
    );
  }
}
export default Page404;
