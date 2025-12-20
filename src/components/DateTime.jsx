import { Grid } from '@mui/material'
import {AniDateTime, AniTime, AniDate} from './AniDateTime'

export const DateTime = () => {
  return (
    <div>
        <h1 className='text-4xl mb-4' id='datetime'>Date time Picker</h1>
        <h1 className='text-3xl'>DateTime</h1>
       <Grid container spacing={2} mb={4}>
        <Grid item size={3}>
            <h2>Desktop</h2>
          <AniDateTime type="desktop"   />
        </Grid>
        <Grid item size={3}>
            <h2>Mobile</h2>
          <AniDateTime type="mobile" />
        </Grid>
        <Grid item size={3}>
            <h2>Disabled</h2>
          <AniDateTime disabled defaultValue={'2024-04-17T15:30'} />
        </Grid>
        <Grid item size={3}>
            <h2>readOnly</h2>
          <AniDateTime readOnly defaultValue={'2024-04-17T15:30'} />
        </Grid>
       </Grid>
       <h1 className='text-3xl'>Time</h1>
       <Grid container spacing={2} mb={4}>
        <Grid item size={3}>
            <h2>Desktop</h2>
          <AniTime type="desktop"   />
        </Grid>
        <Grid item size={3}>
            <h2>Mobile</h2>
          <AniTime type="mobile" />
        </Grid>
        <Grid item size={3}>
            <h2>Disabled</h2>
          <AniTime disabled />
        </Grid>
        <Grid item size={3}>
            <h2>readOnly</h2>
          <AniTime readOnly />
        </Grid>
       </Grid>
        <h1 className='text-3xl'>Date</h1>
       <Grid container spacing={2} mb={4}>
        <Grid item size={3}>
            <h2>Desktop</h2>
          <AniDate type="desktop"   />
        </Grid>
        <Grid item size={3}>
            <h2>Mobile</h2>
          <AniDate type="mobile" />
        </Grid>
        <Grid item size={3}>
            <h2>Disabled</h2>
          <AniDate disabled />
        </Grid>
        <Grid item size={3}>
            <h2>readOnly</h2>
          <AniDate readOnly />
        </Grid>
       </Grid>
    </div>
  )
}
