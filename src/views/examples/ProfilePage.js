import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardHeader
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button
                className="btn-round"
                color="info"
                id="tooltip515203352"
                size="lg"
              >
                Mon CV Général
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Non initié ? Consultez mon CV Général
              </UncontrolledTooltip>
              <Button
                className="btn-round ml-4"
                color="success"
                id="tooltip340339231"
                size="lg"
              >
                Mon CV Technique
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Expert ? Consultez mon CV Technique
              </UncontrolledTooltip>
              <Button
                className="btn-round ml-4"
                color="warning"
                id="tooltip340339234"
                size="lg"
                href="https://www.doyoubuzz.com/djothi-grondin"
                rel="nofollow"
                target="_blank"
              >
                Mon CV Détaillé
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339234">
                Encore plus de détails sur mon parcours
              </UncontrolledTooltip>
            </div>
            <h3 className="title">À Propos</h3>
            <h5 className="description">
              <strong>Technicien</strong> depuis 2009 et <strong>Ingénieur</strong> depuis 2014,
              j'ai brassé divers <strong>technologies</strong> et <strong>méthodes de conception</strong>
              afin de parfaire mon expertise technique en matière de <strong>services numériques</strong>. Je m'attache depuis 2016 à
              étendre mes compétences en tant que <strong>chef de projet</strong> et <strong>ingénieur d'affaires</strong>.
              <br/>
              <br/>
              J'initie aujourd'hui de <strong>nouveaux projets</strong> depuis sa conception jusqu'à son <strong>lancement sur le marché</strong>.
              Grâce à ma volonté d'<strong>entreprendre</strong>, je me suis constitué un <strong>réseau technique et affaire</strong>
              sur l'ensemble de <strong>l'île de la Réunion</strong>.
              À ce titre, je suis capable d'<strong>accompagner des porteurs de projet afin de les former ou de les conseiller pour
              mener à bien leurs objectifs.</strong>
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">Mon Portfolio</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons tech_mobile"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons business_money-coins"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        <i className="now-ui-icons ui-2_like"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <Card>
                          <CardBody>
                            <CardTitle tag="h4">FollowMe</CardTitle>
                            <CardText className="text-justify">
                              Application de <strong>géolocalisation temps réel</strong> pour ne plus se perdre.
                              Celui-ci peut aussi servir à partager la <strong> dlocalisation d'un prestataire</strong>
                              (livreur de resto, dépanneur, taxi et bien d'autres usages)
                            </CardText>
                            <Button
                              color="primary"
                              href="https://followme-server.herokuapp.com/"
                              target="_blank"
                              rel="nofollow"
                            >
                              Tester Maintenant
                            </Button>
                          </CardBody>
                        </Card>
                        <Card>
                          <CardBody>
                            <CardTitle tag="h4">Open Source</CardTitle>
                            <CardText className="text-justify">
                              Contributions logicielles au monde <strong>Open Source</strong> quelque soit le langage.
                              Retrouvez les sur github, npm ou encore dans les contributions de plus grands projets
                              comme momentJS ou encore Serverless
                            </CardText>
                            <Button
                              color="primary"
                              href="https://github.com/djiworks"
                              target="_blank"
                              rel="nofollow"
                            >
                              Découvrir mes contributions
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="6">
                        <Card>
                          <CardBody>
                            <CardTitle tag="h4">PapiPulse</CardTitle>
                            <CardText className="text-justify">
                              Application de <strong>suivi de l'humeur</strong> de vos grands parents afin de lutter contre leur <strong>isolement social</strong>.
                              Chacun devient acteur en communicant aux proches le niveau
                              de <strong>bien être</strong> du sénior.
                            </CardText>
                            <Button
                              color="primary"
                              href="https://papipulse.herokuapp.com"
                              target="_blank"
                              rel="nofollow"
                            >
                              Tester Maintenant
                            </Button>
                          </CardBody>
                        </Card>
                          <Card>
                          <CardBody>
                            <CardTitle tag="h4">PulseCompetition</CardTitle>
                            <CardText className="text-justify">
                              Véritable outil 2.0 pour rendre vos <strong>compétitions ludiques</strong> en proposant à votre
                              audience de participer en votant pour le <strong>"prix du public"</strong>.
                            </CardText>
                            <Button
                              color="primary"
                              href="https://pulsecompetition.netlify.com"
                              target="_blank"
                              rel="nofollow"
                            >
                              Tester Maintenant
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="4">
                      <Card>
                          <CardHeader className="pt-5 mb-0 text-center display-1">
                            <i className="now-ui-icons education_paper"></i>
                          </CardHeader>
                          <CardBody>
                            <CardTitle tag="h4">Blog</CardTitle>
                            <CardText className="text-justify">
                              Blog autour du thème de <strong>l'épargne et de l'investissement</strong>. Découvrez les trucs et astuces pour
                              économiser.
                            </CardText>
                            <Button
                              color="primary"
                              href="https://financiee.wordpress.com"
                              target="_blank"
                              rel="nofollow"
                            >
                              Faire un tour
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="4">
                      <Card>
                          <CardHeader className="pt-5 mb-0 text-center display-1">
                            <i className="now-ui-icons education_hat"></i>
                          </CardHeader>
                          <CardBody>
                            <CardTitle tag="h4">Coaching</CardTitle>
                            <CardText className="text-justify">
                              J'ai développé un processus de <strong>remise en forme</strong> approprié pour les <strong>comptes en banque</strong> en difficulté.
                              Au programme : bilan de connaissances, bilan financier et management par
                              objectifs afin d'accompagner à des rythmes adaptés. 
                            </CardText>
                            <Button
                              color="primary"
                              href="https://djiworks.gitlab.io/financiee/"
                              target="_blank"
                              rel="nofollow"
                            >
                              Tester maintenant
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="4">
                      <Card>
                          <CardHeader className="pt-5 mb-0 text-center display-1">
                            <i className="now-ui-icons education_agenda-bookmark"></i>
                          </CardHeader>
                          <CardBody>
                            <CardTitle tag="h4">Livre</CardTitle>
                            <CardText className="text-justify">
                              Cela fait un peu plus de 2 ans que la <strong>finance personnelle</strong> m'intrigue et me pousse à
                              faire preuve de <strong>créativité et d'innovation</strong> en matière d'<strong>argent</strong>. Ce livre est pour moi
                              l'occasion de partager ce que j'ai appris mais aussi ce que j'ai vécu et vit encore
                              dans la quête vers l'<strong>indépendance financière</strong>.
                            </CardText>
                            <Button
                              color="primary"
                              href="mailto:djothi974[at]gmail.com"
                            >
                              Je suis intéressé
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills4">
                  <h3 className="text-center">Ils me connaissent...</h3>
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default ProfilePage;
