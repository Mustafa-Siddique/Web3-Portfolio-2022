import React from "react";

export default function Experience() {
  return (
    <div className="experience-main py-5">
      <h3 className="text-center py-5">MY WORK EXPERIENCE</h3>
      <div class="row mt-5 align-items-center how-it-works">
        <div class="col-2 text-center bottom">
          <div class="circle">1</div>
        </div>
        <div class="col-6">
          <span>DECEMBER 2020 - MAY 2021</span>
          <h5>Kesavi Web Solutions</h5>
          <h6 className="text-light fs-5">Web Developer Intern</h6>
          <p>
            Worked with industry graded projects; learned web designing,
            WordPress development by building cutting edge websites for global
            clients. Focused on Dapps &amp; Smart Contracts on Blockchain.
          </p>
        </div>
      </div>
      {/* path between 1-2 */}
      <div class="row timeline">
        <div class="col-2">
          <div class="corner top-right"></div>
        </div>
        <div class="col-8">
          <hr />
        </div>
        <div class="col-2">
          <div class="corner left-bottom"></div>
        </div>
      </div>
      {/* second section */}
      <div class="row align-items-center justify-content-end how-it-works">
        <div class="col-6 text-right">
          <span>JUNE 2021 - PRESENT</span>
          <h5>Freelance Web Designer/Marketer</h5>
          <h6 className="text-light fs-5">Web Developer Intern</h6>
          <p>
            Worked with Indian Clients as well as International Clients around
            the Globe.
          </p>
        </div>
        <div class="col-2 text-center full">
          <div class="circle">2</div>
        </div>
      </div>
      {/* path between 2-3 */}
      <div class="row timeline">
        <div class="col-2">
          <div class="corner right-bottom"></div>
        </div>
        <div class="col-8">
          <hr />
        </div>
        <div class="col-2">
          <div class="corner top-left"></div>
        </div>
      </div>
      {/* third section */}
      <div class="row align-items-center how-it-works">
        <div class="col-2 text-center top">
          <div class="circle">3</div>
        </div>
        <div class="col-6">
          <span>SEPTEMBER 2021 - PRESENT</span>
          <h5>Infinite SEO Content</h5>
          <h6 className="text-light fs-5">Web Developer</h6>
          <p>
            Working as Head Developer helping brands grow with Complete Web <br />
            Services i.e., Design/Development/SEO/SMM.
          </p>
        </div>
      </div>
    </div>
  );
}
