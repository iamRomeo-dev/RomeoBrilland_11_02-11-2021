import React, { Component } from "react";
import Banner from "./Banner";
import Dropdown from "./Dropdown";
import { data } from "./data";

class AboutPage extends Component {
  // Fonction qui affiche les données filtré par id qui est récupéré dans l'url
  SingleAccomodationDatas = () => {
    return data.filter((accomodation) => {
      return accomodation.id === this.props.match.params.id;
    })[0];
  };

  render() {
    return (
      <>
        <Banner />
        <div className="flex flex-col justify-between gap-4 mt-6">
          <Dropdown
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
          <Dropdown
            title="Respect"
            content={
              "La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportemant discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
          <Dropdown
            title="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <Dropdown
            title="Sécurité"
            content="La sécurité est la priorité de Kasa.Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </>
    );
  }
}
export default AboutPage;
