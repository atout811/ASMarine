import React, { useEffect } from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ImageGallery from "react-image-gallery";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./gallery.css";
import img1 from "./images/1.jpeg";
import img2 from "./images/2.jpeg";
import img3 from "./images/3.jpeg";
import img4 from "./images/4.jpeg";
import img5 from "./images/5.jpeg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";
import img10 from "./images/10.jpg";

const images = [
  {
    original: img1,
    thumbnail: img1,
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img3,
    thumbnail: img3,
  },
  {
    original: img4,
    thumbnail: img4,
  },
  {
    original: img5,
    thumbnail: img5,
  },
  {
    original: img6,
    thumbnail: img6,
  },
  {
    original: img7,
    thumbnail: img7,
  },
  {
    original: img8,
    thumbnail: img8,
  },
  {
    original: img9,
    thumbnail: img9,
  },
  {
    original: img10,
    thumbnail: img10,
  },
];

export default function Gallery() {
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.title = "Gallery";
  });
  return (
    <div
      style={{
        backgroundColor: "rgb(10, 99, 182)",
      }}
    >
      <ExamplesNavbar />
      <div className="om">
        <h1>ASMarine Gallery</h1>
      </div>
      <ImageGallery
        items={images}
        style={{ display: "flex", justifyContent: "center" }}
      />
      <DemoFooter />
    </div>
  );
}
