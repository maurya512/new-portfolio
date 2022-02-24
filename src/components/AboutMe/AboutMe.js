import React from "react";
import portfolio from "../../utils/mp1.jpg";
import { Typography } from "@material-ui/core";
// import button from material-ui/core/Button
import { IconButton } from "@material-ui/core";
// importing the linkedin icon from the material ui dev dependency
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { GitHub } from '@material-ui/icons'
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
            I love learning about new technologies and implementing them in my projects to enhance my skill set as Web Developer. Let's deploy great stuff together!
          </p>
          {/* buttons that redirect the viewer ter to your social media app */}
          <IconButton
            title="Linked In"
            aria-label=""
            color="inherit"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.linkedin.com/in/maurya-pa-1696a91b2/";
            }}>
            <LinkedInIcon></LinkedInIcon>
          </IconButton>
          <IconButton
            title="Github"
            aria-label=""
            color="inherit"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.github.com/maurya512";
            }}>
            <GitHub />
          </IconButton>
          <IconButton
            title="Facebook"
            aria-label=""
            color="inherit"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.facebook.com/mauryap512";
            }}>
            <FacebookIcon></FacebookIcon>
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
