import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          width: "100vw",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>ASMARINE</h1>
            <h3>Creativity, Innovation, and Autonomy</h3>
            <br />
            <Button
              href="https://www.youtube.com/watch?v=oDKHtluYtYQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
            <section style={{ margin: "50px" }}>
              <h3
                style={{
                  marginRight: "20px",

                  display: "inline",
                  fontSize: "2.3em",
                }}
              >
                Intersted ?
              </h3>
              <Button
                href="/learn-more"
                className="btn-round mr-1"
                color="neutral"
                target="_blank"
                outline
                style={{
                  marginBottom: "10px",
                }}
              >
                Clcik Here
              </Button>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
