import React from "react";
import { Typography } from "@material-ui/core";
import "./Resume.scss";

const Resume = () => {
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
            {/* <img src={portfolio} alt="profile_photo" className="img" /> */}
            <h1>Education</h1>
            <div className="subtitle">
              <h3>Rutgers Coding BootCamp - Oct 2020</h3>
              <p>
                Graduated with 3.7 gpa! 
                <br></br>
                Voted most likely to come up with interesting ways to debug a tricky problem. 
              </p>
            </div>
          </div>
          <div className="name">
              {/* <h1>Education</h1> */}
              <div className="subtitle">
                  <h3>New Jersey Institute of Technology - Present</h3>
                  <p> Pursuing Bachelor's in Computer Technology</p>
              </div>
          </div>
        </React.Fragment>
      );
    };

export default Resume;