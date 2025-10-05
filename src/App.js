// import React, {useRef} from "react";
// import { About } from "./sections/about";
// import { Contact } from "./sections/contact";
// import { Personal } from "./sections/personal";
// import { Skills } from "./sections/skills";
// import { Parallax } from "react-scroll-parallax";
// import { Experience } from "./sections/experience";

// const App = () => {
//   return (
//     <React.Fragment>
      // <div className="menu">
      //   <nav style={{ display: "flex", flexDirection: "row" }}>
      //     <ul>
      //       <li style={{ marginRight: "10rem" }}>
      //         <a href="#about">Nikita Kharya</a>
      //       </li>
      //       <li>
      //         <a href="#skills">Skills</a>
      //       </li>
      //       <li>
      //         <a href="#experience">Experience</a>
      //       </li>
      //       <li>
      //         <a href="#personal">Personal</a>
      //       </li>
      //       <li>
      //         <a href="#contacts">Contact</a>
      //       </li>
      //     </ul>
      //   </nav>
      // </div>
//       <div className="container">
//         <div className="content">
//           <div id="about">
//             <About />
//           </div>
//           <div id="skills">
//             <Skills />
//           </div>
//           <div id="experience">
//               <Experience />
//                </div>
//           <div id="personal">
//             <Personal />
//           </div>
//           <div id="contacts">
//             <Contact />
//           </div>
//         </div>
//       </div>
    
//     </React.Fragment>
//   );
// };

// export default App;


import React from 'react';

// import { About } from "./sections/about";
// import { Contact } from "./sections/contact";
// import { Personal } from "./sections/personal";
// import { Skills } from "./sections/skills";
// import { Parallax } from "react-scroll-parallax";
// import { Experience } from "./sections/experience";
import { MainComp } from "./sections/mainComp";

import './App.scss';
// import { Nav } from './sections/navigation';

const App = () => {
  return (
    <div className="home-container">
        <MainComp />
      // <Nav />
      // <section id="about" className="">
      //   <div className="content">
      //     <About />
      //   </div>
      // </section>
      // <section id="skills">
      //   <div className="content">
      //     <Skills />
      //   </div>
      // </section>
      // <section id="experience" className="">
      //   <div className="content">
      //     <Experience />
      //   </div>
      // </section>
      // <section id="personal">
      //   <div className="content">
      //     <Personal />
      //   </div>
      // </section>
      // <section id="contacts">
      //   <div className="content">
      //     <Contact />
      //   </div>
      // </section>
    </div>
  );
};

export default App;
