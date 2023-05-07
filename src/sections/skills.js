import React, { useRef } from "react";
import "./skills.scss";

export const Skills = () => {
  return (
    <React.Fragment>
      <h1 className="titleSkills">Skills</h1>
      <ul className="tilesWrap">
        <li className="listItem">
          <h3>Easy Peasy!!</h3>
          <p>
            <ul>
              <li>ReactJS</li>
              <li>Redux</li>
              <li>Typescript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </p>
        </li>
        <li className="listItem">
          <h3>Knows well but..</h3>
          <p>
            <ul>
              <li>Javascript (You learn something new everyday!!!</li>
              <li>Angular (Old friend, need to meet again!!)</li>
            </ul>
          </p>
        </li>
        <li className="listItem">
          <h3>Side Learnings</h3>
          <p>
            <ul>
              <li>React Native</li>
              <li>
                UI with Artificial Intelligence (New friend, coz we have to!!)
              </li>
            </ul>
          </p>
        </li>
      </ul>
    </React.Fragment>
  );
};
