import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import Image from "react-bootstrap/Image";
// reactstrap components
import {
  Collapse,
  Card,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { Link as Linko, animateScroll as scroll } from "react-scroll";
import { NavHashLink } from "react-router-hash-link";
import "./nav.css";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const scrollTop = e => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 50 ||
        document.body.scrollTop > 50
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 90 ||
        document.body.scrollTop < 90
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
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="sm"
      style={{ width: "100vw" }}
    >
      {/* <Container> */}
      <div className="navbar-translate">
        <NavHashLink to="/index#top" scroll={scrollTop}>
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="ASMarine Logo."
            tag={Link}
          >
            <Image
              alt="..."
              src={require("assets/img/logo.jpg")}
              roundedCircle
            />
          </NavbarBrand>
        </NavHashLink>

        <button
          aria-expanded={navbarCollapse}
          className={classnames("navbar-toggler navbar-toggler", {
            toggled: navbarCollapse,
          })}
          onClick={toggleNavbarCollapse}
        >
          <span className="navbar-toggler-bar bar1" />
          <span className="navbar-toggler-bar bar2" />
          <span className="navbar-toggler-bar bar3" />
        </button>
      </div>

      <Container>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav className="ml-auto mr-auto text-center" navbar horizontal>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/gallery" tag={Link}>
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/auv" tag={Link}>
                AUV Overview
              </NavLink>
            </NavItem>
            <NavItem>
              <NavHashLink
                to="/index#sectionaboutus"
                scroll={el => {
                  const y =
                    el.getBoundingClientRect().top + window.pageYOffset - 120;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                style={{ fontWeight: "Bold" }}
              >
                <NavLink>About Us</NavLink>
              </NavHashLink>
            </NavItem>
            <NavItem>
              <NavHashLink
                scroll={el => {
                  const y =
                    el.getBoundingClientRect().top + window.pageYOffset - 120;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                to="/index#sectionhalloffame"
                style={{ fontWeight: "Bold" }}
              >
                <NavLink tag={Link}>Hall Of Fame</NavLink>
              </NavHashLink>
            </NavItem>
            <NavItem>
              <NavHashLink
                to="/index#sectioncarousel"
                scroll={el => {
                  const y =
                    el.getBoundingClientRect().top + window.pageYOffset - 120;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                style={{ fontWeight: "Bold" }}
              >
                <NavLink>News</NavLink>
              </NavHashLink>
            </NavItem>

            <NavItem>
              <NavHashLink
                to="/index#sectionteams"
                scroll={el => {
                  const y =
                    el.getBoundingClientRect().top + window.pageYOffset - 120;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                style={{ fontWeight: "Bold" }}
              >
                <NavLink>Teams</NavLink>
              </NavHashLink>
            </NavItem>
            <NavItem>
              <NavHashLink
                to="/index#publicationssection"
                scroll={el => {
                  const y =
                    el.getBoundingClientRect().top + window.pageYOffset - 120;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                style={{ fontWeight: "Bold" }}
              >
                <NavLink>Publications</NavLink>
              </NavHashLink>
            </NavItem>

            <NavItem>
              <NavHashLink
                to="/index#robosubsection"
                scroll={el => {
                  const y =
                    el.getBoundingClientRect().top + window.pageYOffset - 120;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                style={{ fontWeight: "Bold" }}
                offset={-100}
              >
                <NavLink>Robosub</NavLink>
              </NavHashLink>
            </NavItem>
            <NavItem>
              <NavHashLink
                to="/index#sectionsponsors"
                scroll={el => {
                  const y =
                    el.getBoundingClientRect().top + window.pageYOffset - 120;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                style={{ fontWeight: "Bold" }}
              >
                <NavLink>Sponsors</NavLink>
              </NavHashLink>
            </NavItem>
            <NavItem>
              <NavHashLink
                to="/index#sectioncontactus"
                scroll={el => {
                  const y =
                    el.getBoundingClientRect().top + window.pageYOffset - 120;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                style={{ fontWeight: "Bold" }}
              >
                <NavLink>Contact Us</NavLink>
              </NavHashLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
      {/* </Container> */}
    </Navbar>
  );
}

export default ExamplesNavbar;
