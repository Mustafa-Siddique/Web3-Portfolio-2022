import React from "react";
import {FaChevronDown} from 'react-icons/fa'

export default function Hero() {
  return (
    <div className="container hero-main">
      <div className="row">
        <div className="col-lg-8 position-relative">
          <p>HI THERE</p>
          <h1>
            I am Mustafa Siddique
            <br />I am a dApp &amp; Blockchain Developer based in India.
          </h1>
        </div>
        <div className="col-lg-4 d-flex flex-lg-column flex-sm-row flex-column justify-content-lg-end align-items-lg-center pb-4 mt-5 mt-lg-0">
          <a href="#" className="btn-primary me-0 me-sm-4 me-lg-0">
            LATEST PROJECTS
          </a>
          <br className="d-none d-sm-block"/>
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
