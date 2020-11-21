import React from "react";
import portfolio from "../../utils/mp1.jpg";
import { Typography } from "@material-ui/core";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
      </Typography>
      <div className="name">
        <img src={portfolio} alt="profile_photo" className="img" />
        <h1>Maurya Patel</h1>
        <div className="subtitle">
          <h3>I am a Full Stack Web Developer!!</h3>
          <p>
            I love learning about new technologies and implementing them in my projects to enhance my skill set as Web Developer. I predominantly work with the highly reputed and in demand (MERN) stack. Let's deploy great stuff together!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
