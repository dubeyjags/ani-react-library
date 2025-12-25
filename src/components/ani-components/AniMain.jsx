import { Grid } from '@mui/material'
import { useTheme, useMediaQuery } from "@mui/material";
import AniList from './AniList';

const AniMain = ({children, ...props}) => {
  const theme = useTheme();
const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid component={'main'} container direction="row" spacing={2}  className={props.className + ' main'}
    >

      {props.leftMenu && (
        <Grid size={{md: 3, xs: 12}} order={{md:1, xs:1}}>
          <h3 className="text-xl font-semibold mb-2">Left</h3>          
          
          <AniList type={isMdUp ? "vertical" : "horizontal"} menu={props.leftMenu} />
        </Grid>
      )}

      <Grid size={{md: (props.rightMenu && props.leftMenu) ? 6 : (props.rightMenu || props.leftMenu ? 9  : 12), xs: 12}} order={{md:2, xs:3}}>
        <h1 className="text-3xl font-bold">{props.heading}</h1>
        <p className="mt-2">{props.detail}</p>
      {children}
      
      </Grid>

      {props.rightMenu && (
        <Grid size={{md: 3, xs: 12}} order={{md:2, xs:2}}>
          <h3 className="text-xl font-semibold mb-2">Right Side</h3>
          <AniList type={isMdUp ? "vertical" : "horizontal"} menu={props.rightMenu} />
        </Grid>
      )}
    </Grid>
  )
}

export default AniMain