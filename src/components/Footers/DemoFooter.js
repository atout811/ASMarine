import React from "react";

// reactstrap components
import { Row, Container, Navbar, NavItem, NavLink, Nav } from "reactstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import LinkIcon from "@material-ui/icons/Link";

function DemoFooter() {
  return (
    <footer
      style={{
        backgroundColor: "rgb(10, 99, 182)",
        marginTop: "auto",
      }}
      className="footer footer-black footer-white"
    >
      <Container>
        <Row style={{ height: "100px", justifyContent: "space-between" }}>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://asmarineeg.blogspot.com"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div style={{ float: "right" }}>
            <span className="copyright" style={{ color: "white" }}>
              © {new Date().getFullYear()}, ASMarine. All Rights Reserved.
            </span>
            <div style={{ display: "flex", width: "100%", paddin: "0" }}>
              <IconButton
                onClick={() =>
                  window.open("https://www.facebook.com/ASMARINE20/", "_blank")
                }
                style={{ color: "white" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open("https://twitter.com/asmarine20", "_blank")
                }
                style={{ color: "white" }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open("https://www.instagram.com/asmarine20/", "_blank")
                }
                style={{ color: "white" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open(
                    "https://github.com/ASmarine?fbclid=IwAR0CoaXya2aPlDKMUMA1l_g18j2xj66tWyLcVkS3H7_AbYNr6m39u0XbiLA",
                    "_blank"
                  )
                }
                style={{ color: "white" }}
              >
                <GitHubIcon />
              </IconButton>
              {/* <NavLink
                data-placement="bottom"
                href="https://twitter.com/asmarine20"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/ASMARINE20/"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/asmarine20/"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
              <NavLink
                data-placement="bottom"
                href="https://github.com/ASmarine?fbclid=IwAR0CoaXya2aPlDKMUMA1l_g18j2xj66tWyLcVkS3H7_AbYNr6m39u0XbiLA"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink> */}
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
