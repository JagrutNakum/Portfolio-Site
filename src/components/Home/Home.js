import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Programmer.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section className="home-div">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name purple"> JAGRUT NAKUM</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }} >
                <Type />
              </div>
            </Col>

            <Col md={6} style={{ paddingBottom: 20 }}>
              <div className="intro-img">
                <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid intro-img"
                style={{ maxHeight: "535px" }}
              />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
