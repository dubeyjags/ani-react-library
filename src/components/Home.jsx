import { Grid } from "@mui/material";
import { AniAvatar, AniCard } from "./ani-components";
export const Home = () => {
  return (
   <Grid container>
    <Grid item gap={"20px"} size={{md:'4', sm:'12'}}>
      <AniCard header="Main" />
      </Grid>
      
    <Grid item size={{md:'4', sm:'12'}}>
      <AniCard header="Avatar" />
    </Grid>
   </Grid>
  )
}