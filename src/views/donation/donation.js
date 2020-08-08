import React from "react";
import "./donation.css";
import { Link } from "react-router-dom";

export default function Donation() {
  return (
    <div className="field">
      <h1>Ops ...</h1>
      <h2>
        Our donation for 2020 season is currently closed.
        <br></br>
        If you want to become a team sponsor, you can still check the{" "}
        <Link to="/index"> sponsors section </Link> in nav bar
      </h2>
    </div>
  );
}
