import React from "react";
import {FaChevronDown} from 'react-icons/fa'

export default function Hero() {
  return (
    <div className="container hero-main">
      <div className="row">
        <div className="col-md-8 position-relative">
          <p>HI THERE</p>
          <h1>
            I am Mustafa Siddique
            <br />I am a dApp &amp; Blockchain Developer based in India.
          </h1>
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-end align-items-center pb-4">
          <a href="#" className="btn-primary">
            LATEST PROJECTS
          </a>
          <br />
          <br />
          <a href="#" className="btn-primary">
            MORE ABOUT ME
          </a>
        </div>
      </div>
      <span>Scroll Down <FaChevronDown color="red"/></span>
    </div>
  );
}
