import React from "react";
import Populars from "./Populars";
import Box from "@mui/material/Box";

const Home = ({ populars }) => {
  localStorage.setItem("userName", "Juan Ordosgoite");
  return (
    <Box style={{backgroundColor:"#e8cfda"}}>
      <Populars populars={populars} />
    </Box>
  );
};

export default Home;