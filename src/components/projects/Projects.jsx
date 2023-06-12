import React from "react";
import "./Projects.scss";
//blob img
//project-img
import MyPartfolio from '../Images/projectsImg/my-partfole.png';
import greenery from '../Images/projectsImg/greenery.png';
import Energi_cat from '../Images/projectsImg/Enegi-cat.png';
import Marico from '../Images/projectsImg/Marico.png';
import Soundcore from '../Images/projectsImg/Soundcore.png';
import recidiviz from '../Images/projectsImg/recidiviz.png';
import solarExe from '../Images/projectsImg/SolarExe.png';
import Tesla from '../Images/projectsImg/Tesla.png';
import Burning from '../Images/projectsImg/Burning.png';
import HBT_HOTEL from '../Images/projectsImg/HbtHoterl.png';

function Projects() {
  return (
    <>
    <h1 className="Itms">My Projects</h1>
    <div className="project-box">
      {/* //project-box-1 */}
      <div className="box-pr box-3">
          <img src={Soundcore} />     
          <h1>Soundcore</h1>
          <p className="paragrf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, porro quam facere voluptatum dicta error cum esse illum nam laboriosam nesciunt rem pariatur explicabo ullam. Exercitationem a accusantium sed dignissimos.</p>
           <a href="https://github.com/kamronovv/headphones" target="_blank" >More Info</a>
        </div>
        {/* //project-box-2 */}
        <div className="box-pr box-2">
          <img src={greenery} />
          <h1>Greenery</h1>
          <p className="paragrf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, porro quam facere voluptatum dicta error cum esse illum nam laboriosam nesciunt rem pariatur explicabo ullam. Exercitationem a accusantium sed dignissimos.</p>
           <a href="https://github.com/kamronovv/greenery" target="_blank">More Info</a>
        </div>
        {/* //project-box-3 */}
        <div className="box-pr box-3">
          <img src={Energi_cat} />     
          <h1>Energi Cat</h1>
          <p className="paragrf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, porro quam facere voluptatum dicta error cum esse illum nam laboriosam nesciunt rem pariatur explicabo ullam. Exercitationem a accusantium sed dignissimos.</p>
           <a href="#">More Info</a>
        </div>
        {/* //project-box-4 */}
        <div className="box-pr box-3">
          <img src={Marico} />     
          <h1>Marico</h1>
          <p className="paragrf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, porro quam facere voluptatum dicta error cum esse illum nam laboriosam nesciunt rem pariatur explicabo ullam. Exercitationem a accusantium sed dignissimos.</p>
           <a href="#">More Info</a>
        </div>
        {/* //project-box-5 */}
        <div className="box-pr box-3">
          <img src={solarExe} />     
          <h1>solarExe</h1>
          <p className="paragrf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, porro quam facere voluptatum dicta error cum esse illum nam laboriosam nesciunt rem pariatur explicabo ullam. Exercitationem a accusantium sed dignissimos.</p>
           <a href="#">More Info</a>
        </div>
        {/* //project-box-6 */}
        <div className="box-pr box-3">
          <img src={Tesla} />     
          <h1>Tesla</h1>
          <p className="paragrf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, porro quam facere voluptatum dicta error cum esse illum nam laboriosam nesciunt rem pariatur explicabo ullam. Exercitationem a accusantium sed dignissimos.</p>
           <a href="#">More Info</a>
        </div>
        {/* //project-box-7 */}
        <div className="box-pr box-3">
          <img src={Burning} />     
          <h1>Burning</h1>
          <p className="paragrf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, porro quam facere voluptatum dicta error cum esse illum nam laboriosam nesciunt rem pariatur explicabo ullam. Exercitationem a accusantium sed dignissimos.</p>
           <a href="#">More Info</a>
        </div>
        {/* //project-box-8 */}
        
        {/* project-box-9 */}
        
        {/* project-box-9 */}
      </div>
    </>
  );
}
export default Projects;
