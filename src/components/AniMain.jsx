import { Grid } from '@mui/material'

const AniMain = ({children, ...props}) => {
  return (
    <Grid container direction="row" spacing={2}   className={props.className}>

      {props.leftMenu && (
        <Grid size={{md: 3, xs: 12}}>
          <h3 className="text-xl font-semibold mb-2">Left</h3>          
          <Menus links={props.leftMenu} />
        </Grid>
      )}

      <Grid size={{md: (props.rightMenu && props.leftMenu) ? 6 : (props.rightMenu || props.leftMenu ? 9  : 12), xs: 12}}>
        <h1 className="text-3xl font-bold">{props.heading}</h1>
        <p className="mt-2">{props.detail}</p>
      {children}
      
      </Grid>

      {props.rightMenu && (
        <Grid size={{md: 3, xs: 12}} order={{md:2, xs:1}}>
          <h3 className="text-xl font-semibold mb-2">Right Side</h3>
          <Menus links={props.rightMenu} />
        </Grid>
      )}
    </Grid>
  )
}

export default AniMain

export const Menus = (links) => {
   return (
    <>
      <ul className="list-disc list-inside">
        {links.links.map((link, index) => (
          <li key={index} className="mb-1">
            <a className={'active' in link ? 'font-bold' : 'bold'} href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
          </li>
        ))}
      </ul>
    </>
  )
}