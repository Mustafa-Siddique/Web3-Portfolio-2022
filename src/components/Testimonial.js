import React, { Component, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import client from "../client.js";

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonialData: [],
    };

    client
      .fetch(
        `*[_type == "testimonial"]{
      name,
      title,
      review,
      organisation,
      mainImage{
        asset->{
        _id,
        url
      }
    }
  }`
      )
      .then((data) => this.setState({ testimonialData: data }))
      .catch(console.error);
  }
  
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
            {this.state.testimonialData.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.mainImage.asset.url} alt="" />
                  <div className="myCarousel">
                    <h3>{item.name}</h3>
                    <h4>{item.title}, {item.organisation}</h4>
                    <p>
                      {item.review}
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}
