import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { facebookUrl, githubUrl, instagramURL, linkedinUrl } from "../common/PersonalData";

const Footer = () => {
  const customHeight = { height: "30px" };
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{ backgroundColor: "#875b75" }}
        padding={1}
      >
        <Link
          href={facebookUrl}
          color="inherit"
          padding={1}
        >
          <FontAwesomeIcon icon={faFacebook} style={customHeight} />
        </Link>

        <Link
          href={instagramURL}
          color="inherit"
          padding={1}
        >
          <FontAwesomeIcon icon={faInstagram} style={customHeight} />
        </Link>
        <Link
          href={githubUrl}
          color="inherit"
          padding={1}
        >
          <FontAwesomeIcon icon={faGithub} style={customHeight} />
        </Link>
        <Link
          href={linkedinUrl}
          color="inherit"
          padding={1}
        >
          <FontAwesomeIcon icon={faLinkedin} style={customHeight} />
        </Link>
      </Box>
    </>
  );
};

export default Footer;
