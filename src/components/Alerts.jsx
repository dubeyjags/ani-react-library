import { Grid, Stack } from "@mui/material";
import { AniAlert } from "./ani-components/AniAlert";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
export const Alerts = ({ ...props }) => {
  return (
    <>
      <h1>Alerts</h1>
      <h2>Alert Types</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <h3>Error</h3>
            <AniAlert severity="error" icon={<LightbulbCircleIcon />}>
              This is an error alert — check it out!
            </AniAlert>
            <h3>Info</h3>
            <AniAlert severity="info">
              This is an info alert — check it out!
            </AniAlert>
            <h3>Success</h3>
            <AniAlert severity="success">
              This is a success alert — check it out!
            </AniAlert>
            <h3>Warning</h3>
            <AniAlert severity="warning">
              This is an error alert — check it out!
            </AniAlert>
            <h2>With heading</h2>
            <AniAlert severity="error" heading="Heading Example">
              This is an error alert — check it out!
            </AniAlert>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <h2>With heading</h2>
            <AniAlert severity="error" heading="Heading Example">
              This is an error alert — check it out!
            </AniAlert>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
