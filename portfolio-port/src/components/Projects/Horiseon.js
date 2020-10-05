import React from "react";
import horiseonImg from "../../assets/images/horiseon.PNG";

function Horiseon(horiseon) {
  const currentProject = {
    name: "horiseon",
    description: "My first project where I created a semi-functioning website.",
  };
  return (
    <section>
      <a href="https://pv95335.github.io/horiseonChallenge/">
        {currentProject.name}
      </a>
      <p>My first project where I began using html and css.</p>
      <div>
        <img src={horiseonImg} />
      </div>
    </section>
  );
}

export default Horiseon;
