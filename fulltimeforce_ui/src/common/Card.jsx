import React from "react";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Card = ({ data }) => {
  const getTruncatedName = (source) => {
    let skippedString = source.trimEnd();
    if (skippedString.length > 22) {
      return skippedString.substring(0, 22) + "...";
    } else {
      return source;
    }
  };

  return (
    <Box key={data.id} padding={2} style={{backgroundColor:"#875b75"}}>
      <div className="card ">
        <Link to={`/movieDetails/${data.id}`}>
          <CardMedia
            component="img"
            height="100%"
            src={data.poster_path ? `https://image.tmdb.org/t/p/original/${data.poster_path}` : "image-not-found.jpg"}
            alt={data.title}
            style={{ borderRadius: "5px" }}
          />
        </Link>
        <Divider />
        <Box padding={1}>
          <Typography gutterBottom variant="h5" component="div">
            {getTruncatedName(data.original_title)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.overview.slice(0, 70) + "..."}
          </Typography>
          <p>Rating: {data.vote_average}</p>
          <Link to={`/movieDetails/${data.id}`}>
            <Button variant="contained">Details</Button>
          </Link>
        </Box>
      </div>
    </Box>
  );
};

export default Card;
