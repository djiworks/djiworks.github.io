import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Besoin d'aide pour votre projet ?</h3>
              <h5 className="description">
                Vous souhaitez simplement un conseil, un accompagnement ? Ou vous êtes à la recherche
                d'un prestataire ? Echangeons ensemble sur votre idée sans formalités ni investissement.
                <blockquote>
                  <p className="blockquote blockquote-primary">
                    "Une idée ne vaut rien, sa mise en action vaut tout !"
                    <br/><br/>
                    <small>- Pierre Kosciusko Morizet, 2014</small>
                  </p>
                </blockquote>
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round mr-1"
                color="info"
                href="mailto:djothi974[at]gmail.com"
                role="button"
                size="lg"
              >
                Rencontrons nous !
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Suivez mon actualité</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href="https://twitter.com/djiworks"
                id="tooltip86114138"
                size="lg"
                target="_blank"
                rel="nofollow"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip86114138">
                Follow me
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="instagram"
                href="https://www.instagram.com/lilj974"
                id="tooltip735272548"
                size="lg"
                target="_blank"
                rel="nofollow"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="linkedin"
                href="https://www.linkedin.com/in/djothi-grondin-5b60b3100/"
                id="tooltip647117716"
                size="lg"
                target="_blank"
                rel="nofollow"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Follow me
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="github"
                href="https://github.com/djiworks"
                id="tooltip331904895"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip331904895">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
