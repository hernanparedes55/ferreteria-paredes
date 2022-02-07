import React from 'react'
import * as ReactBootStrap from "react-bootstrap";


const Carousel = () => {
    return (
        <div style={{position:"static" , bottom:"-20rem"}}>
            <ReactBootStrap.Carousel>
              <ReactBootStrap.Carousel.Item>
                <img
                className="d-block w-100"
                src="images/1.png"
                alt="First slide"
                />
                <ReactBootStrap.Carousel.Caption>
                  {/* <h3>First slide label</h3> */}
                  {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </ReactBootStrap.Carousel.Caption>
              </ReactBootStrap.Carousel.Item>

            <ReactBootStrap.Carousel.Item>
                <img
                className="d-block w-100"
                src="images/2.png"
                alt="Second slide"
                />
                <ReactBootStrap.Carousel.Caption>
                  {/* <h3>Second slide label</h3> */}
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </ReactBootStrap.Carousel.Caption>
            </ReactBootStrap.Carousel.Item>

            <ReactBootStrap.Carousel.Item>
              <img
              className="d-block w-100"
              src="images/3.png"
              alt="Third slide"
              />
              <ReactBootStrap.Carousel.Caption>
                {/* <h3>Third slide label</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </ReactBootStrap.Carousel.Caption>
            </ReactBootStrap.Carousel.Item>

            <ReactBootStrap.Carousel.Item>
              <img
              className="d-block w-100"
              src="images/4.png"
              alt="Third slide"
              />
              <ReactBootStrap.Carousel.Caption>
                {/* <h3>Third slide label</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </ReactBootStrap.Carousel.Caption>
            </ReactBootStrap.Carousel.Item>


           </ReactBootStrap.Carousel>


        </div>
    );
}

export default Carousel;
