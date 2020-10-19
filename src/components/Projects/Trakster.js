import React from "react";
import traksterImg from "../../assets/images/Trakster.PNG";

function Trakster(trakster) {
  const currentProject = {
    name: "trakster",
    description: "My first project where I created a semi-functioning website.",
  };
  return (
    <section>
      <a href="https://project-trakster.herokuapp.com/">
        {currentProject.name}
      </a>
      <p>My first project where I began using html and css.</p>
      <div>
        <img src={traksterImg} />
      </div>
    </section>
  );
}

export default Trakster;
