import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Progress,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Mes compétences</h2>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row className="text-center">
                <Col md="4">
                  <h3>Technique</h3>
                  <div className="progress-container progress-success">
                    <h4 className="progress-badge">Programmation</h4>
                    <Progress max="100" value="90">
                      <span className="progress-value">90%</span>
                    </Progress>
                  </div>
                  <div className="progress-container progress-primary">
                    <h4 className="progress-badge">Base de données</h4>
                    <Progress max="100" value="85">
                      <span className="progress-value">85%</span>
                    </Progress>
                  </div>
                  <div className="progress-container progress-warning">
                    <h4 className="progress-badge">Administration système</h4>
                    <Progress max="100" value="75">
                      <span className="progress-value">75%</span>
                    </Progress>
                  </div>
                </Col>
                <Col md="4">
                  <h3>Analyse</h3>
                    <div className="progress-container progress-success">
                      <h4 className="progress-badge">Analyse des besoins</h4>
                      <Progress max="100" value="90">
                        <span className="progress-value">90%</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-primary">
                      <h4 className="progress-badge">Développement produit</h4>
                      <Progress max="100" value="70">
                        <span className="progress-value">70%</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-info">
                      <h4 className="progress-badge">Architecture et Conception technique</h4>
                      <Progress max="100" value="85">
                        <span className="progress-value">85%</span>
                      </Progress>
                    </div>
                </Col>
                <Col md="4">
                  <h3>Management</h3>
                    <div className="progress-container progress-success">
                      <h4 className="progress-badge">Gestion de projet</h4>
                      <Progress max="100" value="80">
                        <span className="progress-value">80%</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-info">
                      <h4 className="progress-badge">Andragogie</h4>
                      <Progress max="100" value="75">
                        <span className="progress-value">75%</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-warning">
                      <h4 className="progress-badge">Economie d'entreprise</h4>
                      <Progress max="100" value="60">
                        <span className="progress-value">60%</span>
                      </Progress>
                    </div>
                </Col>
              </Row>
            </div>
            <p className="text-center">
              <Button
                className="btn-round ml-4"
                color="warning"
                id="tooltip340339234"
                size="lg"
                href="https://www.doyoubuzz.com/djothi-grondin"
                rel="nofollow"
                target="_blank"
              >
                Encore plus de détails ici
              </Button>
            </p>
          </Container>
        </div>
        {/* <div className="section section-team text-center">
          <Container>
            <h2 className="title">Here is our team</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/avatar.jpg")}
                    ></img>
                    <h4 className="title">Romina Hadid</h4>
                    <p className="category text-info">Model</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/ryan.jpg")}
                    ></img>
                    <h4 className="title">Ryan Tompson</h4>
                    <p className="category text-info">Designer</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/eva.jpg")}
                    ></img>
                    <h4 className="title">Eva Jenner</h4>
                    <p className="category text-info">Fashion</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div> */}
        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;
