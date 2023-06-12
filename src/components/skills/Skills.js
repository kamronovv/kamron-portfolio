import React from "react";
import './Skills.scss'
import MyPartfolio from '../Images/projectsImg/my-partfole.png';
import greenery from '../Images/projectsImg/greenery.png';
import Energi_cat from '../Images/projectsImg/Enegi-cat.png';

function Skills() {

  


  return (
    <div className="skillsBox">
      <h1 className="title">My Skills</h1>
      <div className="SklBoxs">
        <h3 className="skillsName">Html</h3>
        <h3 className="Prs">92%</h3>
        <div className="linePrs">
          <div className="linePrs2-html"></div>
        </div>
      </div>

      <div className="SklBoxs">
        <h3 className="skillsName">Css</h3>
        <h3 className="Prs">84%</h3>
        <div className="linePrs">
          <div className="linePrs2-css"></div>
        </div>
      </div>

      <div className="SklBoxs">
        <h3 className="skillsName">Sass</h3>
        <h3 className="Prs">76%</h3>
        <div className="linePrs">
          <div className="linePrs2-sass"></div>
        </div>
      </div>

      <div className="SklBoxs">
        <h3 className="skillsName">Bootstrap</h3>
        <h3 className="Prs">60%</h3>
        <div className="linePrs">
          <div className="linePrs2-bootstrap"></div>
        </div>
      </div>

      <div className="SklBoxs">
        <h3 className="skillsName">Javascript</h3>
        <h3 className="Prs">74%</h3>
        <div className="linePrs">
          <div className=" linePrs2-Javascript"></div>
        </div>
      </div>

      <div className="SklBoxs">
        <h3 className="skillsName">React Js</h3>
        <h3 className="Prs">63%</h3>
        <div className="linePrs">
          <div className=" linePrs2-react"></div>
        </div>
      </div>
    </div>
  
  );
}

export default Skills;
