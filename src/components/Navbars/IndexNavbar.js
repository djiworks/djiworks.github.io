import React from "react";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              id="navbar-brand"
            >
              DjiWorks <sub>by Djothi Grondin</sub>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="/"
                >
                  <i className="now-ui-icons location_world"></i>
                  <p>Accueil</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#/profile-page"
                >
                  <i className="now-ui-icons business_badge"></i>
                  <p>A propos</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#/landing-page"
                >
                  <i className="now-ui-icons tech_laptop"></i>
                  <p>Informatique</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.shutterstock.com/g/Djiworks"
                  target="_blank"
                  rel="nofollow"
                >
                  <i className="now-ui-icons media-1_album"></i>
                  <p>Photographies</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://djiworks.gitlab.io/financiee/"
                  target="_blank"
                  rel="nofollow"
                >
                  <i className="now-ui-icons business_money-coins"></i>
                  <p>Finance</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/djothi-grondin-5b60b3100/"
                  target="_blank"
                  id="facebook-tooltip"
                  rel="nofollow"
                >
                  <i className="fab fa-linkedin-in"></i>
                  <p className="d-lg-none d-xl-none">LinkedIn</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Find me on LinkedIn
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://twitter.com/djiworks"
                  target="_blank"
                  id="twitter-tooltip"
                  rel="nofollow"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow me on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/lilj974"
                  target="_blank"
                  id="instagram-tooltip"
                  rel="nofollow"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow me on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
