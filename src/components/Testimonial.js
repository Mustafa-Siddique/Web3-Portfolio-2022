import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import person1 from "../images/testimonial1.jpg";
import person2 from "../images/testimonial2.jpg";
import person3 from "../images/testimonial3.jpg";

export default class Testimonials extends Component {
  render() {
    return (
        <div className=" testimonial-main">
      <div className="container">
        <h3 className="text-center">TESTIMONIAL</h3>
        <h2 className="text-center mb-5">What People Say.</h2>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img src={person1} alt="" />
            <div className="myCarousel">
              <h3>Mir J.</h3>
              <h4>CEO, OfficeSetup24x7</h4>
              <p>
                Very professional! Work delivered before the deadline, I am
                extremely happy with his work.
              </p>
            </div>
          </div>

          <div>
            <img src={person2} alt="" />
            <div className="myCarousel">
              <h3>Abhimanyu Kumar Mishra</h3>
              <h4>Director, Lucky Cargo Clearing</h4>
              <p>They're available to help us everytime.</p>
            </div>
          </div>

          <div>
            <img src={person3} alt="" />
            <div className="myCarousel">
              <h3>Christof W.</h3>
              <h4>CEO, HVAC</h4>
              <p>
                It really transcends everything we've done to date. Everyone
                who's seen website, he loveed it.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
      </div>
    );
  }
}
