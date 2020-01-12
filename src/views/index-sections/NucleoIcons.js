import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Services numériques</h2>
              <h5 className="description text-justify">
                <strong>Depuis 2014, je développe et j'accompagne</strong> de nombreux <strong>projets numériques</strong>.
                Mon savoir-faire s'étend depuis la <strong>conception technique</strong> jusqu'à la livraison
                du projet en passant par des conseils en matière de <strong>gestion projet</strong>, <strong>développement de produit</strong>
                et <strong>stratégie de communication.</strong>
              </h5>
              <Button
                className="btn-round"
                color="info"
                href="#/landing-page"
                outline
                size="lg"
              >
                Plus d'informations
              </Button>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="now-ui-icons ui-1_send"></i>
                <i className="now-ui-icons ui-2_like"></i>
                <i className="now-ui-icons design-2_html5"></i>
                <i className="now-ui-icons tech_mobile"></i>
                <i className="now-ui-icons business_bulb-63"></i>
                <i className="now-ui-icons emoticons_satisfied"></i>
                <i className="now-ui-icons shopping_cart-simple"></i>
                <i className="now-ui-icons objects_spaceship"></i>
                <i className="now-ui-icons media-2_note-03"></i>
                <i className="now-ui-icons gestures_tap-01"></i>
                <i className="now-ui-icons design_palette"></i>
                <i className="now-ui-icons education_hat"></i>
                <i className="now-ui-icons location_pin"></i>
                <i className="now-ui-icons media-1_camera-compact"></i>
                <i className="now-ui-icons business_globe"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
