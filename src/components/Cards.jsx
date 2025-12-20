import React from "react";
import { AniCard } from "./AniCard";
import { Button, CardActions, Grid } from "@mui/material";

const Cards = () => {
  return (
    <>
    <h1 className='text-3xl' id="cards">Cards</h1>
      <Grid container spacing={2} mb={4}>
        <Grid item size={4}>
          <AniCard>this is card description</AniCard>
        </Grid>
        <Grid item size={4}>
          <AniCard header={"Card header"}>this is card description</AniCard>
        </Grid>
        <Grid item size={4}>
          <AniCard footer={"card footer"}>this is card description</AniCard>
        </Grid>
        <Grid item size={4}>
          <AniCard
            image={
              "https://samplelib.com/lib/preview/jpeg/sample-clouds-400x300.jpg"
            }
          >
            this is card description
          </AniCard>
        </Grid>
        <Grid item size={4}>
          <AniCard
            header={"Card header"}
            image={
              "https://samplelib.com/lib/preview/jpeg/sample-clouds-400x300.jpg"
            }
            footer={"card footer"}
            actions={
              <>
                <Button size="small">Action 1</Button>
                <Button size="small">Action 2</Button>
              </>
            }
          >
            this is card description
          </AniCard>
        </Grid>
        <Grid item size={4}>
          <AniCard
          >
            Card flipper
          </AniCard>
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;
