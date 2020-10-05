import React from "react";
import ProfilePicture from "../../assets/images/myPicture.jpg";
import "../Stylesheets/Style.css";

const About = () => {
  return (
    <section className="my-5">
      <h1 className="about">About Me</h1>
      <p>
        Hello I am Victor Paniagua. I am a current student in coding bootcamp in
        the UCLA Extension program. I enrolled in this program in order to learn
        the fundementals of web programming. My goal is to create a solid
        foundation in web programming so that I am prepared to improve and learn
        new skills.
      </p>
      <img
        src={ProfilePicture}
        className="my-2"
        style={{ width: "10%" }}
        alt="cover"
      />
    </section>
  );
};

export default About;
