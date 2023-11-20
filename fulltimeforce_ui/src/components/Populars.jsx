import React from "react";
import Card from "../common/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Item } from "../common/ItemStyles";

const Populars = ({ populars }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h4" component="div" align="center">These are the most popular movies of the day:</Typography>
      <Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {populars.map((data) => (
          <Grid item xs={9} sm={6} md={3} key={data.id}>
            <Item>
              <Card data={data} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Populars;