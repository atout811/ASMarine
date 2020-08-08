import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import Background from "assets/img/carousel/idk2.jpg";
import "./idk.css";

var Blur = require("react-blur").default;
var radius = "5px";
var ydenomi;
// core components
var sectionStyle = {
  backgroundImage: "url(" + Background + ")",
  "-webkit-filter": "blur(" + radius + ")",
  filter: "blur(" + radius + ")",
  height: "100%",
};

const items = [
  {
    src: require("assets/img/carousel/idk1.jpg"),
    altText: "Gamed",
    caption:
      "ASmarine celebrates its first successful participation in RoboSub and fulfilling static judging criteria.",
    date: "8/8/2019",
  },
  {
    src: require("assets/img/carousel/idk3.jpg"),
    altText: "gamed khalis",
    caption:
      " ASmarine engineers start testing their vehicle at Transdec and the atmosphere is chilling!!!",
    date: "3/8/2019",
  },
  {
    src: require("assets/img/carousel/idk4.jpg"),
    altText: "gamed khalis",
    caption:
      "ASmarine wins Teledyne grant for research projects among 5 winners from different countries and gets a PathFinder DVL",
    date: "30/4/2020",
  },
  {
    src: require("assets/img/carousel/idk5.jpg"),
    altText: "gamed khalis",
    caption:
      "ASmarine's up for a new season, now is your chance to dive in!! Submit your application and join us now.",
    date: "8/8/2019",
  },
  {
    src: require("assets/img/carousel/idk6.jpg"),
    altText: "gamed khalis",
    caption:
      "Valeo becomes an ASmarine partner and ASmarine receives a technical mentorship program",
    date: "10/10/2019",
  },
  {
    src: require("assets/img/carousel/idk7.jpg"),
    altText: "gamed khalis",
    caption:
      "ASmarine joins the Maker Faire at the smart village to introduce youngsters to underwater technologies and motivate future robotics enthusiasts",
    date: "10/9/2019",
  },
];
const itemsBlurred = [
  {
    src: require("assets/img/carousel/idk1-blurred.jpg"),
    altText: "Gamed",
    caption: "Gamed",
  },
  {
    src: require("assets/img/carousel/idk3-blurred.jpg"),
    altText: "gamed khalis",
    caption: "Gamed tany",
  },
  {
    src: require("assets/img/carousel/idk4-blurred.jpg"),
    altText: "gamed khalis",
    caption: "Gamed tany",
  },
  {
    src: require("assets/img/carousel/idk5-blurred.jpg"),
    altText: "gamed khalis",
    caption: "Gamed tany",
  },
  {
    src: require("assets/img/carousel/idk6-blurred.jpg"),
    altText: "gamed khalis",
    caption: "Gamed tany",
  },
  {
    src: require("assets/img/carousel/idk7-blurred.jpg"),
    altText: "gamed khalis",
    caption: "Gamed tany",
  },
];
function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div
        className="section pt-o"
        id="carousel"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${itemsBlurred[activeIndex].src})`,
        }}
      >
        <Row>
          <Col className="ml-auto mr-auto" md="6">
            <Card className="page-carousel" style={{ padding: 0, margin: 0 }}>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map(item => {
                  ydenomi = item.src;
                  //console.log(items[activeIndex]);
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />

                      <CarouselCaption
                        captionText={item.date}
                        captionHeader={item.caption}
                      />
                    </CarouselItem>
                  );
                })}
                <a
                  className="left carousel-control carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();

                    previous();
                  }}
                  role="button"
                >
                  <span className="fa fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <span className="fa fa-angle-right" />
                  <span className="sr-only">Next</span>
                </a>
              </Carousel>
            </Card>
          </Col>
        </Row>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
