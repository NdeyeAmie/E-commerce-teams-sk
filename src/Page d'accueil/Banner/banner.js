import React from "react";
import './banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Imag1 from '../image/1.jpg'
import Imag2 from '../image/2.jpg'
import Imag3 from '../image/3.jpg'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Banniere() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{height: '70vh'}}>
          <div className="flou"></div>
          <img src={Imag1} text="First slide" style={{width: '100%', objectFit: 'cover', height: '100%'}} alt="" />
          <Carousel.Caption>
            <h3>Offre Special</h3>
            <p>Profitez de l'offre de ce mois en achetant des produits à bas prix</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height: '70vh'}}>
          <div className="flou"></div>
          <img src={Imag2} text="Second slide" style={{width: '100%', objectFit: 'cover', height: '100%'}} alt="" />
          <Carousel.Caption>
            <h3>Black Friday</h3>
            <p>C'est bientôt le Black Friday !!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height: '70vh'}}>
          <div className="flou"></div>
          <img src={Imag3} text="Third slide" style={{width: '100%', objectFit: 'cover', height: '100%'}} alt="" />
          <Carousel.Caption>
            <h3>Nos Produits</h3>
            <p>Acceder à tous nos produits et Acheter tout ce que vous voulez !</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Banniere;