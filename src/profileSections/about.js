import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { Nav } from '../sections/navigation';

import main2 from "../../assets/images/main-2.jpg";
import vmw from "../../assets/images/vmw.jpg";
import db1 from "../../assets/images/db1.jpg";
import acc from "../../assets/images/acc.jpg";
import cts from "../../assets/images/cts.jpg";
import blank from "../../assets/images/blank.jpg";
import skills from "../../assets/images/React.gif";
import personalTravel from "../../assets/images/personal-travel.jpg";
import personalPaint from "../../assets/images/personal-paint.jpg";
import contact_painting from "../../assets/images/contact_painting.jpg";

import mainPage from "./mainPage";

import "../App.scss";
import "./about.scss";

const About = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = mainPage;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Setup scroll listener
  window.addEventListener(
    "scroll",
    function (event) {
      const images = [
        "position2",
        "position3",
        "position4",
        "position5",
        "position6",
        "position7",
      ];
      const textStyle = {
        1: { opacity: 0, transform: "0px", fontSize: "0.8rem" },
        2: { opacity: 0.25, transform: "10px", fontSize: "1rem" },
        3: { opacity: 0.5, transform: "15px", fontSize: "1.2rem" },
        4: { opacity: 1, transform: "20px", fontSize: "1.5rem" },
        5: { opacity: 1, transform: "30px", fontSize: "4rem" },
        6: { opacity: 1, transform: "30px", fontSize: "4rem" },
        7: { opacity: 1, transform: "30px", fontSize: "4rem" },
        8: { opacity: 1, transform: "30px", fontSize: "4rem" },
        9: { opacity: 1, transform: "30px", fontSize: "4rem" },
      };

      const y = window.scrollY;
      const label = Math.min(Math.floor(y / 30) + 1, 20);
    //   const imageToUse = `position${label}`;
    //   const currentImg = document.getElementById(imageToUse);
    //   if (currentImg) currentImg.style.visibility = "visible";

    //   images.forEach((im) => {
    //     if (im !== imageToUse) {
    //       document.getElementById(im).style.visibility = "hidden";
    //     }
    //   });

      if (label > 6) {
        document.getElementById("position7").style.visibility = "visible";
      }

      // console.log("Scrolllll", window.pageYOffset/30);
      let scrollPos = window.pageYOffset / 30;

      // console.log(window.pageYOffset);

      var docViewTop = $(window).scrollTop() + 80;
      var docViewBottom = docViewTop + $(window).height();

      var elemTopVM = $(document.getElementById("position7")).offset().top;
      var elemBottomVM =
        elemTopVM + $(document.getElementById("position7")).height();
      // console.log('VMW', elemTopVM, $(document.getElementById('position7')).height(), $(window).scrollTop() + 80)

      var elemTopDB = $(document.getElementById("db")).offset().top;
      var elemBottomDB = elemTopDB + $(document.getElementById("db")).height();

      var elemTopACC = $(document.getElementById("acc")).offset().top;
      var elemBottomACC =
        elemTopACC + $(document.getElementById("acc")).height();

      var elemTopCTS = $(document.getElementById("cts")).offset().top;
      var elemBottomCTS =
        elemTopCTS + $(document.getElementById("cts")).height();

      // console.log((elemBottom <= docViewBottom) && (elemTop >= docViewTop));

      if (elemBottomVM <= docViewBottom && elemTopVM >= docViewTop) {
        document.getElementById("we-title-1").style.position = "sticky";
        document.getElementById("we-title-1").style.opacity = 1;
        document.getElementById("we-title-1").style.fontSize = "4rem";
        document.getElementById(
          "we-title-1"
        ).style.transform = `translateY(30px)`;
        // document.getElementById('we-title').style.opacity = 0;
        document.getElementById("we-title-2").style.opacity = 0;
        document.getElementById("we-title-3").style.opacity = 0;
        document.getElementById("we-title-4").style.opacity = 0;
      } else if (elemBottomDB <= docViewBottom && elemTopDB >= docViewTop) {
        document.getElementById("we-title-2").style.position = "sticky";
        document.getElementById("we-title-2").style.opacity = 1;
        document.getElementById("we-title-2").style.fontSize = "4rem";
        document.getElementById(
          "we-title-2"
        ).style.transform = `translateY(30px)`;
        // document.getElementById('we-title').style.opacity = 0;
        document.getElementById("we-title-1").style.opacity = 0;
        document.getElementById("we-title-3").style.opacity = 0;
        document.getElementById("we-title-4").style.opacity = 0;
      } else if (elemBottomACC <= docViewBottom && elemTopACC >= docViewTop) {
        document.getElementById("we-title-3").style.position = "sticky";
        document.getElementById("we-title-3").style.opacity = 1;
        document.getElementById("we-title-3").style.fontSize = "4rem";
        document.getElementById(
          "we-title-3"
        ).style.transform = `translateY(30px)`;
        // document.getElementById('we-title').style.opacity = 0;
        document.getElementById("we-title-1").style.opacity = 0;
        document.getElementById("we-title-2").style.opacity = 0;
        document.getElementById("we-title-4").style.opacity = 0;
      } else if (elemBottomCTS <= docViewBottom && elemTopCTS >= docViewTop) {
        document.getElementById("we-title-4").style.position = "sticky";
        document.getElementById("we-title-4").style.opacity = 1;
        document.getElementById("we-title-4").style.fontSize = "4rem";
        document.getElementById(
          "we-title-4"
        ).style.transform = `translateY(30px)`;
        // document.getElementById('we-title').style.opacity = 0;
        document.getElementById("we-title-1").style.opacity = 0;
        document.getElementById("we-title-2").style.opacity = 0;
        document.getElementById("we-title-3").style.opacity = 0;
      } else {
        // document.getElementById('we-title').style.opacity = 0;
        document.getElementById("we-title-1").style.opacity = 0;
        document.getElementById("we-title-2").style.opacity = 0;
        document.getElementById("we-title-3").style.opacity = 0;
        document.getElementById("we-title-4").style.opacity = 0;
      }

      if (label < 7) {
        // document.getElementById('we-title').style.opacity = 0;
        document.getElementById("we-title-1").style.opacity = 0;
        document.getElementById("we-title-2").style.opacity = 0;
        document.getElementById("we-title-3").style.opacity = 0;
        document.getElementById("we-title-4").style.opacity = 0;
      }

      // if (label > 15) {
      //     document.getElementById('we-title-1').style.position = 'static';
      // } else {
      //     document.getElementById('we-title').style.position = 'sticky';
      //     document.getElementById('we-title').style.opacity = textStyle[label] ? textStyle[label].opacity : 1;
      //     document.getElementById('we-title').style.fontSize = textStyle[label] ? textStyle[label].fontSize : '4rem';
      //     document.getElementById('we-title').style.transform = textStyle[label] ? `translateY(${textStyle[label].transform })` : 'translateY(30px})';
      // }
      if (label < 7) {
        document.getElementById("we-content").style.visibility = "hidden";
      } else {
        document.getElementById("we-content").style.visibility = "visible";
      }
    },
    { passive: true }
  );

  return (
    <div className="container-new">
        <Nav />
      <section style={{ height: "80rem" }} id="abouts">
        <div className="home-header" >
          <div className="header-image-container">
            <p className="intro">
              I am a creative front-end developer offering 10 plus years of
              experience in designing and delivering high-impact web solutions
              for Fortune 500 organizations. I strongly believe that even a
              single well-placed element on the screen can convey a powerful
              user experience. Let me introduce myself with the help of this
              single image as an example.
            </p>
            <img src={main2} alt="MySetup" style={{ marginTop: "10%" }} />
          </div>
        </div>
      </section>
      <div className="scroll-image">
        {/* <img id="position1" src={blank} alt="VMW" width='22%' style={{ marginTop: '10%', position: 'absolute', top: '20%', right: '25%', visibility: 'hidden' }} /> */}
        <img
          id="position2"
          src={blank}
          alt="VMW"
          width="25%"
          style={{
            marginTop: "20%",
            position: "absolute",
            top: "20%",
            right: "30%",
            visibility: "hidden",
            opacity: "0.5",
          }}
        />
        <img
          id="position3"
          src={blank}
          alt="VMW"
          width="25%"
          style={{
            marginTop: "30%",
            position: "absolute",
            top: "20%",
            right: "40%",
            visibility: "hidden",
            opacity: "0.5",
          }}
        />
        <img
          id="position4"
          src={blank}
          alt="VMW"
          width="25%"
          style={{
            marginTop: "40%",
            position: "absolute",
            top: "20%",
            right: "50%",
            visibility: "hidden",
            opacity: "0.5",
          }}
        />
        <img
          id="position5"
          src={vmw}
          alt="VMW"
          width="25%"
          style={{
            marginTop: "50%",
            position: "absolute",
            top: "20%",
            right: "60%",
            visibility: "hidden",
            opacity: "0.5",
          }}
        />
      </div>
      <section style={{ marginTop: "5rem", backgroundColor: "#AAB8B6" }} id="experiences">
        <div className="work-experience">
          <div class="we-title-main">Work Experience</div>
          <div class="text-container">
            <div class="we-title" id="we-title-1">
              2022
            </div>
            <div class="we-title" id="we-title-2">
              2019
            </div>
            <div class="we-title" id="we-title-3">
              2017
            </div>
            <div class="we-title" id="we-title-4">
              2013
            </div>
          </div>
          <div
            className="we-image-container row"
            id="vmware"
            style={{ marginTop: -150 }}
          >
            <div className="col-md-5 col-sm-12">
              <br />
              <img
                id="position6"
                src={vmw}
                alt="VMW"
                width="70%"
                style={{
                  marginTop: "20%",
                  opacity: "0.5",
                  position: "absolute",
                  top: "20%",
                  right: "20%",
                  visibility: "hidden",
                }}
              />
              <img
                id="position7"
                src={vmw}
                alt="VMW"
                width="70%"
                style={{
                  height: "100%",
                  marginTop: "50%",
                  outline: "solid 2px black",
                  visibility: "hidden",
                }}
              />
            </div>
            <div
              id="we-content"
              style={{ visibility: "hidden", marginTop: "30rem" }}
              className="col-md-7 col-sm-12 we-content"
            >
              <h3 className="element-title" style={{ display: "block" }}>
                Member Of Technical Staff - III
              </h3>
              <h4 className="element-subtitle" style={{ display: "block" }}>
                05/2022 - Current
              </h4>
              <p className="we-content-text">
                <ul>
                  <li>
                    Revamped legacy user interface (UI) to next-generation
                    application for VMware CloudHealth application by
                    implementing latest React version to better enable
                    Enterprise customers to manage and optimize cloud spending,
                    resulting in simplified analysis and reporting capabilities.
                  </li>
                  <li>
                    Developed UI components as a Service (UIaaS) to provide
                    consistent experience across multi-cloud applications for
                    customers, resulting in improved user experience and faster
                    release cycles.
                  </li>
                  <li>
                    Proactively identified need and proposed proof of concept
                    for improved data visualization in VMWare CloudHealth
                    FlexOrgs application, forecasted to reduce user time by 35%.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="we-image-container row" style={{ marginTop: "5rem" }}>
            <div
              className="col-md-7 col-sm-12 we-content"
              id="db"
              style={{ paddingLeft: "5rem" }}
            >
              <h3 className="element-title" style={{ display: "block" }}>
                Assitant Vice President
              </h3>
              <h4 className="element-subtitle" style={{ display: "block" }}>
                02/2019 - 05/2022
              </h4>
              <p className="we-content-text">
                <ul>
                  <li>
                    Managed development of interactive transaction monitoring
                    application UI to enable automated compliance checks across
                    all transactions, resulting in faster processing, better
                    regulatory compliance, and reduced risk of manual errors.
                  </li>
                  <li>
                    Devised and executed standardized UI interfaces using
                    configuration-based approach, simplifying development
                    process and producing modular components that could be
                    utilized across multiple projects within the bank.
                  </li>
                  <li>
                    Mentored and coached 7 junior front-end developers,
                    providing guidance and support to help them develop their
                    skills and advance in their careers.
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-md-5 col-sm-12" style={{ textAlign: "end" }}>
              <br />
              <img
                src={db1}
                alt="DB"
                width="70%"
                style={{ outline: "solid 2px black", height: "100%" }}
              />
            </div>
          </div>
          <div className="we-image-container row" style={{ marginTop: "5rem" }}>
            <div className="col-md-5 col-sm-12">
              <br />
              <img
                src={acc}
                alt="Accenture"
                width="70%"
                style={{ outline: "solid 2px black" }}
              />
            </div>
            <div
              className="col-md-7 col-sm-12 we-content"
              style={{ marginTop: "5rem" }}
              id="acc"
            >
              <h3 className="element-title" style={{ display: "block" }}>
                Senior Software Engineer
              </h3>
              <h4 className="element-subtitle" style={{ display: "block" }}>
                08/2017 - 02/2019
              </h4>
              <p className="we-content-text">
                <ul>
                  <li>
                    Supervised and managed migration of legacy applications to
                    latest Angular version, while consistently improving user
                    experience through creative design ideation, client
                    collaboration, and cross-team coordination, resulting in a
                    20% increase in user engagement.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="we-image-container row" style={{ marginTop: "5rem" }}>
            <div
              className="col-md-7 col-sm-12 we-content"
              style={{ marginTop: "5rem", paddingLeft: "5rem" }}
              id="cts"
            >
              <h3 className="element-title" style={{ display: "block" }}>
                Associate
              </h3>
              <h4 className="element-subtitle" style={{ display: "block" }}>
                06/2013 - 06/2017
              </h4>
              <p className="we-content-text">
                <ul>
                  <li>
                    Single-handedly did the full front-end development of a
                    healthcare web application that included the UI creation
                    with HTML5, CSS3 and AngularJS.
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-md-5 col-sm-12" style={{ textAlign: "end" }}>
              <br />
              <img
                src={cts}
                alt="Cognizant"
                width="70%"
                style={{ outline: "solid 2px black" }}
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
      <section style={{ marginTop: "10rem" }} id="skill">
        <h2 className="we-title-main">SKILLS</h2>
        <img src={skills} alt="Skills" width="100%"></img>
      </section>

     
      <section
        style={{
          marginTop: "10rem",
          backgroundColor: "#AAB8B6",
          padding: "2rem",
          zIndex: 3,
          position: 'relative'
        }}
        className="personal row"
        id="personals"
      >
        <h2
          className="we-title-main"
          style={{ paddingTop: 0, paddingBottom: "2rem" }}
        >
          {" "}
          Personal
        </h2>
        <div style={{ display: "flex", height: '100vh' }}>
        <div className="img-container">
          <img
            class="img1"
            src={personalTravel}
            alt="Travel"
            style={{ borderRadius: "5rem" }}
          ></img>
        </div>
        <div class="color1">
          <h2 style={{fontSize: '5rem', color: '#316764' }}> TRAVELLING</h2>
          <p className="personal-content">
            I have had the opportunity to explore 15 countries across four
            different continents, including multiple visits to some of them. The
            continents I have visited includes:
            <ul>
                <li>Asia </li>
                <li>Europe </li>
                <li>North America </li>
                <li>Australia </li>
                    </ul> 
          </p>
        </div>
      </div>
      <div style={{ display: "flex", height: '100vh' }}>
        <div className="img-container">
          <img
            class="img2"
            src={personalPaint}
            alt="Paint"
            style={{ borderRadius: "5rem" }}
          ></img>
        </div>
        <div class="color2">
          <h2 style={{fontSize: '5rem', color: '#316764'}}>PAINTING</h2>
          <p className="personal-content">
            Engaging in painting is one of the most valuable ways for me to
            spend my time. You can find all the paintings created by me on my
            Insta handle
            <div>
            <SocialIcon
                url="https://www.instagram.com/kharyanikita/"
                style={{width: 25, height: 25 }}
              />
              <a
                href="https://www.instagram.com/kharyanikita/"
                target="_blank"
                aria-label="Instagram profile"
              >
                @kharyanikita
              </a>
              </div>
          </p>
        </div>
      </div>
        {/* <div
          className="col-sm-12 col-md-4 personalImg"
          style={{ display: "flex", justifyContent: "center", zIndex: "10" }}
        >
          <img
            src={personalTravel}
            alt="Travel"
            width="100%"
            style={{ borderRadius: "5rem" }}
          ></img>
          <h2>TRAVELLING</h2>
          <p className="personal-content">
            I have had the opportunity to explore 15 countries across four
            different continents, including multiple visits to some of them. The
            continents I have visited include Asia, Europe, North America, and
            Australia.
          </p>
        </div>
        <div
          className="col-sm-12 col-md-7 personalImg"
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "5%",
            zIndex: "10",
          }}
        >
          <img
            src={personalPaint}
            alt="Paint"
            width="95%"
            style={{ borderRadius: "5rem" }}
          ></img>
          <h2>PAINTING</h2>
          <p className="personal-content">
            Engaging in painting is one of the most valuable ways for me to
            spend my time. You can find all the paintings created by me on my
            Insta
          </p>
        </div> */}
      </section>
      <section style={{ marginTop: "5rem" }} id="contacts">>
        <h2 className="we-title-main">Contact</h2>
        

        <img src={contact_painting} alt="Contact" width="100%"></img>
      </section>
      <section style={{ marginTop: "5rem" }} >
      <a
          href="https://www.linkedin.com/in/nikita-kharya-14a83670/"
          target="_blank"
          style={{ position: "absolute", top: 5 }}
          aria-label="Linkedin profile"
        ></a>
        <a href="mailto:nikitakharya09@gmail.com" aria-label="Email"></a>
        <a
          href="https://www.instagram.com/kharyanikita/"
          target="_blank"
          aria-label="Instagram profile"
        />
      </section>
    </div>
  );
};

export default About;
