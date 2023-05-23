import React from "react";
import MyImg2 from "../Images/my-img-2.jpg";
import "./Aboute.scss";

function Aboute() {
  return (
    <div className="about-box">
      <img className="left-box" src={MyImg2} />
      <div className="right-box">
        <h1 className="title">Abaut Me</h1>
        <h3>
          Developer <span>Frontend</span>
        </h3>
        <p className="paragrf">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus debitis eaque rem quod quibusdam cum explicabo
          recusandae, reprehenderit veniam, id fuga in nisi eum consectetur. In
          asperiores maiores natus molestias veritatis quia quae voluptas. Iusto
          dolores, eum nisi delectus laudantium sunt accusamus voluptatibus
          quisquam consectetur animi, mollitia impedit suscipit. Perspiciatis
          obcaecati reiciendis quam nesciunt, et, labore recusandae iure quidem
          error voluptatum voluptates est. Animi obcaecati illum vitae a quam,
          fuga voluptas quo commodi laborum quidem ex rem accusantium delectus
          distinctio!
        </p>
        <a className="talkButton">Let`s Talk</a>
      </div>
    </div>
  );
}

export default Aboute;
