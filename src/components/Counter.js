import React from "react";
import CountUp from "react-countup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ImArrowUp} from 'react-icons/im'

export default function Counter() {
  return (
    <div className="counter-main">
      <div className="container">
        <Row md={2} lg={4}>
          <Col sm>
            <div className="counter-stat">
              <CountUp enableScrollSpy={true} end={999} />+
              <br />
              <p className="fs-6 text-secondary">Lines Coded</p>
            </div>
          </Col>
          <Col sm>
            <div className="counter-stat">
              <CountUp enableScrollSpy={true} end={500} />+
              <br />
              <p className="fs-6 text-secondary">Cups of Coffee</p>
            </div>
          </Col>
          <Col sm className="position-relative count-bg">
            <ImArrowUp color="green" style={{position:"absolute"}}/>
            <div className="counter-stat">
              <CountUp enableScrollSpy={true} end={50} />+
              <br />
              <p className="fs-6 text-secondary">Projects Completed</p>
            </div>
          </Col>
          <Col sm>
            <div className="counter-stat">
              <CountUp enableScrollSpy={true} end={95} />%
              <br />
              <p className="fs-6 text-secondary">Happy Clients</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
