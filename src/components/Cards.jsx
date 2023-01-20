import React from "react";
import Card from "./Card";

import image1 from "../images/cordoba.jpg";
import image2 from "../images/Glaciar.jpg";
import image3 from '../images/verano.jpg';

const cards = [
    {
        id: 1,
        title: "Cordoba",
        image: image1,
        url: "https://www.cordobaturismo.gov.ar/",
    },
    {
        id: 2,
        title: "Chubut",
        image: image2,
        url: "https://www.chubut.gov.ar/",
    },
    {
        id: 3,
        title: "Bariloche",
        image: image3,
        url: "https://barilocheturismo.gob.ar/es/home",
    },
];

function Cards() {
    return (
    <div className="container d-flex justify-content-center align-items-center h-100">
        
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
    );
}

export default Cards;
