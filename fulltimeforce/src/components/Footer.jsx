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
          href="https://www.facebook.com/juan.ordosgoite.9/"
          color="inherit"
          padding={1}
        >
          <FontAwesomeIcon icon={faFacebook} style={customHeight} />
        </Link>

        <Link
          href="https://www.instagram.com/juanxv12"
          color="inherit"
          padding={1}
        >
          <FontAwesomeIcon icon={faInstagram} style={customHeight} />
        </Link>
        <Link
          href="https://github.com/jordosgoite/"
          color="inherit"
          padding={1}
        >
          <FontAwesomeIcon icon={faGithub} style={customHeight} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/juan-ordosgoite-1a492567/"
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
