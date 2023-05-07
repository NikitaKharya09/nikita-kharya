import React from "react";
import "./personal.scss";
import { Parallax } from "react-scroll-parallax";

import painting1 from "../../assets/images/painting1.jpg";
import painting2 from "../../assets/images/painting2.jpg";
import painting3 from "../../assets/images/painting3.jpg";
import painting4 from "../../assets/images/painting4.jpg";
import painting5 from "../../assets/images/painting5.jpg";
import painting6 from "../../assets/images/painting6.jpg";
import painting7 from "../../assets/images/painting7.jpg";
import painting8 from "../../assets/images/painting8.jpg";

export const Personal = () => {

  return (
    <React.Fragment>
      <div className="page">
      <Parallax >
        <div className="headerStyle">
          <h1 style={{textAlign: 'center', marginTop: 30}}> Few of my personal interests </h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 style={{color: "rgb(58, 9, 60)", fontSize: 25}}> Painting </h3>
            <div className="external">
              <div className="horizontal-scroll-wrapper">
                <div className="img-wrapper slower">
                  <img className="imgPersonal" src={painting6} alt="" />
                </div>

                <div
                  className="img-wrapper faster"
                  style={{ marginRight: "10%" }}
                >
                  <img className="imgPersonal" src={painting4} alt="" />
                </div>

                <div className="img-wrapper slower vertical">
                  <img className="imgPersonal" src={painting1} alt="" />
                </div>

                <div className="img-wrapper slower slower-down">
                  <img className="imgPersonal" src={painting2} alt="" />
                </div>

                <div className="img-wrapper">
                  <img className="imgPersonal" src={painting5} alt="" />
                </div>

                <div className="img-wrapper slower">
                  <img className="imgPersonal" src={painting3} alt="" />
                </div>

                <div className="img-wrapper faster1">
                  <img className="imgPersonal" src={painting7} alt="" />
                </div>

                <div className="img-wrapper slower">
                  <img className="imgPersonal" src={painting8} alt="" />
                </div>
              </div>
            </div>
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.2) 0.5rem 0.5rem 2rem 0px",
                textAlign: "center",
                height: 50,
                zIndex: 3
              }}
            >
              <h3 style={{ display: "inline" }}> Latest Inspiration: </h3>
              <a
                href="https://www.asisi.de/en/panorama/pergamon"
                target="_blank"
              >
                Yedgar Asisi:
              </a>
            </div>{" "}
          </div>
        </div>
        </Parallax>
        <Parallax >
        
        <div className="main">
            <div className="mainContent">
          <h2 >Travelling</h2>
          <p>
            I have travelled to 15 countries till now in 4 different continents, a few of them multiple times as well.
            Visited Continents: Asia, Europe, North America and Australia.
          </p>
          <h2 className="titleMargin"> Social Work</h2>
          <p>
            I have a keen interest in giving back to society. This includes teaching, being able to help the needy, any efforts to be able to help the greatest human beings, our army family, and trying to get closer to being carbon neutral.
            I have been part of the outreach programs of Cognizant and Accenture as well as on my personal level.
          </p>
          <h2 className="titleMargin">Puns</h2>
          <p>
            I enjoy the lame puns every now and then (who doesnt!)
          </p>
               
        </div>
          </div>
      </Parallax>
      </div>
    </React.Fragment>
  );
};
