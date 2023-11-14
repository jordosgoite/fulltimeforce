import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      style={{ backgroundColor: "#875b75" }}
      padding={2}
    >
      <Link to={"/"}>
        <FontAwesomeIcon
          icon={faHome}
          style={{ height: "30px", color: "#000000" }}
        />
      </Link>
      <Typography gutterBottom variant="h6">
        User: Juan Ordosgoite
      </Typography>
    </Box>
  );
};

export default Navbar;