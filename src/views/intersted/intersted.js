import React, { useState, useEffect } from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Slide from "@material-ui/core/Slide";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import LinkIcon from "@material-ui/icons/Link";
import "./intersted.css";
import { Link } from "react-router-dom";

export default function Intersted() {
  const [mech, setMech] = useState(false);
  const [elec, setElec] = useState(false);
  const [other, setOther] = useState(false);
  useEffect(() => {
    document.title = "Intersted";
  });

  const handleMech = () => {
    setMech(!mech);
  };
  const handleElec = () => {
    setElec(!elec);
  };
  const handleOther = () => {
    setOther(!other);
  };

  return (
    <div className="soso">
      <ExamplesNavbar />

      <div className="rookie">
        <h1>If you're rookie and would like to learn more</h1>

        <div className="lists">
          <div className="list">
            <h2 className="click" onClick={handleMech}>
              Mechanical
            </h2>
            <Slide direction="left" in={mech} mountOnEnter unmountOnExit>
              <ul>
                <li>video</li>
                <li>video</li>
                <li>video</li>
                <li>video</li>
              </ul>
            </Slide>
          </div>
          <div className="list">
            <h2 className="click" onClick={handleElec}>
              Electrical
            </h2>
            <Slide direction="left" in={elec} mountOnEnter unmountOnExit>
              <ul>
                <li>video</li>
                <li>video</li>
                <li>video</li>
                <li>video</li>
              </ul>
            </Slide>
          </div>
          <div className="list">
            <h2 className="click" onClick={handleOther}>
              Software
            </h2>
            <Slide direction="left" in={other} mountOnEnter unmountOnExit>
              <ul>
                <li>video</li>
                <li>video</li>
                <li>video</li>
                <li>video</li>
              </ul>
            </Slide>
          </div>
        </div>
      </div>
      <div className="contribute">
        <h1>Contribute</h1>
        <p>If you have more experiences, contribute to our open source code</p>
        <IconButton
          onClick={() =>
            window.open(
              "https://github.com/ASmarine?fbclid=IwAR0CoaXya2aPlDKMUMA1l_g18j2xj66tWyLcVkS3H7_AbYNr6m39u0XbiLA",
              "_blank"
            )
          }
        >
          <GitHubIcon />
        </IconButton>
      </div>
      <div className="donation">
        <h1>Donate</h1>
        <p>
          If you would like to contribute to the team financially, click the
          donation link below
        </p>
        <Link to="/donation">
          <IconButton>
            <LinkIcon style={{ color: "white" }} />
          </IconButton>
        </Link>
      </div>
      <div className="join">
        <h1>Join us</h1>
        <p>
          If you would like to be part of our adventure, apply to preferred
          subteam
        </p>
        <div className="lists">
          <div className="list">
            <h2>Mechanical</h2>
            <div>
              <IconButton
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSd7NyOMef3_qbbgJ3LtgZlpgkfVzeNy6HJyUMzHdwDxL6SbwA/viewform?fbclid=IwAR3p_tFmjV2whUwtWNYtsbr_Wum10UiT9Qsl7WkSHyRWkTRWmn-0bw-XPYs",
                    "_blank"
                  )
                }
              >
                <LinkIcon />
              </IconButton>
            </div>
          </div>
          <div className="list">
            <h2>Electrical</h2>
            <div>
              <IconButton
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSejFbR_gL-fYPOYeN38QNBBmWxSXa3-kqrdZqZXjkwVp2B0-w/viewform?fbclid=IwAR3gyeC_LS14vgcbTUIKGBc4oH7JLh7Qx1QPhqMAy4RyPipvzFn75ZHqhGA ",
                    "_blank"
                  )
                }
              >
                <LinkIcon />
              </IconButton>
            </div>
          </div>
          <div className="list">
            <h2>Software</h2>
            <div>
              <IconButton
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfH81wLCvuKNRsNlS44t9L-IY7NjHo90ruJMkCmM3Ayh2MNmw/viewform?fbclid=IwAR0xdLG0zEgCgMPVnoDbP-I3mWH6YHfrdeHZ0xhQBajs8XV4Pnz4xEhEuJ0",
                    "_blank"
                  )
                }
              >
                <LinkIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "block" }}>
        <DemoFooter />
      </div>
    </div>
  );
}
