import React from "react";
import runBuddy from "../../assets/images/runBuddy.JPG";

function RunBuddy(runbuddy) {
  const currentProject = {
    name: "run-buddy",
    description: "My first project where I created a semi-functioning website.",
  };
  return (
    <section>
      <a href="https://pv95335.github.io/run-buddy/">{currentProject.name}</a>
      <p>My first project where I began using html and css.</p>
      <div>
        <img src={runBuddy} />
      </div>
    </section>
  );
}

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
        <img src={horiseon} />
      </div>
    </section>
  );
}

function BookGarden(runbuddy) {
  const currentProject = {
    name: "run-buddy",
    description: "My first project where I created a semi-functioning website.",
  };
  return (
    <section>
      <a href="https://jason-ahmed-123.github.io/groupproject1-book-garden/">
        {currentProject.name}
      </a>
      <p>My first project where I began using html and css.</p>
      <div>
        <img src={runBuddy} />
      </div>
    </section>
  );
}

function Trakster(runbuddy) {
  const currentProject = {
    name: "run-buddy",
    description: "My first project where I created a semi-functioning website.",
  };
  return (
    <section>
      <a href="https://project-trakster.herokuapp.com/">
        {currentProject.name}
      </a>
      <p>My first project where I began using html and css.</p>
      <div>
        <img src={runBuddy} />
      </div>
    </section>
  );
}

export default RunBuddy;
