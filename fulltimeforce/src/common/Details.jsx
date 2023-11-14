import React, { Suspense } from "react";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Details = ({ data }) => {

  return (
    <>
      {Object.keys(data).length > 0 && (
        <Suspense fallback={<div>Loading...</div>}>
          <Box
            sx={{ flexGrow: 1 }}
            style={{ backgroundColor: "#e8cfda" }}
            marginTop={2}
          >
            <Grid container spacing={2}>
              <Grid item xs={10} sm={4} md={5}>
                <CardMedia
                  component="img"
                  height="550px"
                  src={data.poster_path ? `https://image.tmdb.org/t/p/original/${data.poster_path}` : "image-not-found.jpg"}
                  alt={data.title}
                  style={{objectFit:"contain", marginBottom:"20px"}}
                />
              </Grid>
              <Grid
                item
                xs={6}
                display="flex"
                flexDirection="column"
                alignItems={"top"}
                justifyContent={"top"}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  marginTop={3}
                >
                  {data.title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  marginTop={3}
                >
                  {data.release_date}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  marginTop={3}
                >
                  Overview:
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  marginBottom={3}
                >
                  {data.overview}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Suspense>
      )}
    </>
  );
};

export default Details;
