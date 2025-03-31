import React from "react";
import './banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Imag1 from '../image/1.png'
import Imag2 from '../image/2.png'
import Imag3 from '../image/3.png'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Banniere() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{height: '70vh'}}>
          <img src={Imag1} text="First slide" style={{width: '100%', objectFit: 'cover'}} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height: '70vh'}}>
          <img src={Imag2} text="Second slide" style={{width: '100%', objectFit: 'cover'}} alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height: '70vh'}}>
          <img src={Imag3} text="Third slide" style={{width: '100%', objectFit: 'cover'}} alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Banniere;