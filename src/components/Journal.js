import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Journal() {
  return (
    <div className="journal-main bg-black">
      <div className="container text-center">
        <h3>JOURNAL</h3>
        <h2>LATEST FROM THE BLOG</h2>
        <p
          className="mx-auto text-center para"
        >
          Want to know why a website is highly recommended for your Business?
          You can get an idea about competing with other businesses with a
          Planned Strategy and Good Website Design. Go through My Featured Blogs
          to know more...!
        </p>
        <hr />
      </div>
      <div className="container mt-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <Card bg="dark" text="dark">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title className="text-light mt-2">
                  How to be Effective at working remotely?
                </Card.Title>
                <Card.Text className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci sint, harum a eaque sapiente quas voluptas quos unde
                  possi...
                </Card.Text>
              </Card.Body>
              <a href="/" className="btn-blog">
                Continue
              </a>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" text="dark">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1658240527554-9cf987b4de49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title className="text-light mt-2">
                  How to be Effective at working remotely?
                </Card.Title>
                <Card.Text className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci sint, harum a eaque sapiente quas voluptas quos unde
                  possi...
                </Card.Text>
              </Card.Body>
              <a href="/" className="btn-blog">
                Continue
              </a>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" text="dark">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1644982648600-4583461837f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title className="text-light mt-2">
                  How to be Effective at working remotely?
                </Card.Title>
                <Card.Text className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci sint, harum a eaque sapiente quas voluptas quos unde
                  possi...
                </Card.Text>
              </Card.Body>
              <a href="/" className="btn-blog">
                Continue
              </a>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
