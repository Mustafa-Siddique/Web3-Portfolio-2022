import React from "react";

export default function About() {
  return (
    <div className="container-fluid bg-black py-5 about-main">
      <div className="container text-center py-5">
        <h3>ABOUT</h3>
        <h2 className="mb-3">More About Me</h2>
        <p
          className="mx-auto"
          style={{
            maxWidth: "1000px",
            fontSize: "1.6rem",
            fontFamily: "montserrat",
          }}
        >
          I am an Expert WordPress Developer and Web Designer. From my work as a
          Developer, I have helped many companies grow by designing and
          developing their websites or marketing campaigns. If you are looking
          for someone who is passionate about what they do and will be happy to
          tell you everything there is to know about how we can help your
          business flourish online, please contact me below!
        </p>
      </div>
      <hr className="w-25 m-auto" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4>Website... for Businesses/Professionals? Why?</h4>
            <p>As a professional web designer and WordPress developer, I create websites for businesses &amp; professionals that are simple to use yet powerful. My designs are both functional and beautiful, with an emphasis on usability. Using responsive design techniques, my sites work well on all devices so no matter what you're viewing them from - your phone, tablet or desktop computer - the website looks great!</p>
            <p>A great looking website is one of the best investments you can make in your business. It's not just about aesthetics, it's about marketing and branding too. Whether you need a new site or are wanting to upgrade your existing site, let me team help you get started with a free consultation today! I specialize in WordPress development for any industry and have many features that will be perfect for your needs. Reach me at (+91) 80760 75287 or fill the form below !"</p>
            <a href="#">DOWNLOAD MY CV</a>
          </div>
          <div className="col-lg-6">
            <h4>I've Got Some skills.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
