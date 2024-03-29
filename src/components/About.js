import React from "react";
import SkillBar from "react-skillbars";

export default function About() {
  const skills = [
    {
      type: "HTML5",
      level: 90,
      color: {
        bar: "#1E5128",
        title: { text: "#fff", background: "#1E5128" },
      },
    },
    {
      type: "CSS3",
      level: 90,
      color: {
        bar: "#4E9F3D",
        title: { text: "#fff", background: "#4E9F3D" },
      },
    },
    {
      type: "BOOTSTRAP",
      level: 82,
      color: {
        bar: "#8B9A46",
        title: { text: "#fff", background: "#8B9A46" },
      },
    },
    {
      type: "REACT.JS",
      level: 80,
      color: {
        bar: "#4ECCA3",
        title: { text: "#fff", background: "#4ECCA3" },
      },
    },
    {
      type: "WEB3.JS",
      level: 78,
      color: {
        bar: "#DBEDF3",
        title: { text: "#fff", background: "#DBEDF3" },
      },
    },
    {
      type: "WORDPRESS",
      level: 70,
      color: {
        bar: "#8787A3",
        title: { text: "#111", background: "#8787A3" },
      },
    },
    {
      type: "MONGO.DB",
      level: 65,
      color: {
        bar: "#404B69",
        title: { text: "#fff", background: "#404B69" },
      },
    },
  ];

  return (
    <div className="container-fluid bg-black py-5 about-main">
      <div className="container text-center py-5">
        <h3>ABOUT</h3>
        <h2 className="mb-3">More About Me</h2>
        <p className="mx-auto para">
          I am an Expert WordPress Developer and Web Designer. From my work as a
          Developer, I have helped many companies grow by designing and
          developing their websites or marketing campaigns. If you are looking
          for someone who is passionate about what they do and will be happy to
          tell you everything there is to know about how we can help your
          business flourish online, please contact me below!
        </p>
      </div>
      <hr className="w-25 m-auto bg-secondary mb-5" />
      <div className="container about">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="text-lg-start text-center">Website... for Businesses/Professionals? Why?</h4>
            <p>
              As a professional web designer and WordPress developer, I create
              websites for businesses &amp; professionals that are simple to use
              yet powerful. My designs are both functional and beautiful, with
              an emphasis on usability. Using responsive design techniques, my
              sites work well on all devices so no matter what you're viewing
              them from - your phone, tablet or desktop computer - the website
              looks great!
            </p>
            <p>
              A great looking website is one of the best investments you can
              make in your business. It's not just about aesthetics, it's about
              marketing and branding too. Whether you need a new site or are
              wanting to upgrade your existing site, let me team help you get
              started with a free consultation today! I specialize in WordPress
              development for any industry and have many features that will be
              perfect for your needs. Reach me at (+91) 80760 75287 or fill the
              form below !"
            </p>
            <a href="https://docs.google.com/uc?id=1C5-s9RJB5X1YSL72sfCPfWQ66F6uVHMS" target="_blank" className="btn-cv">
              DOWNLOAD MY CV
            </a>
          </div>
          <div className="col-lg-6 d-flex flex-column mt-5 mt-lg-0">
            <h4 className="text-lg-start text-center">I've Got Some skills.</h4>
            <div className="my-auto" style={{ height: "fit-content" }}>
              <SkillBar skills={skills} />
            </div>
            <a href="#" className="btn-ping mt-auto">
              PING ME NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
