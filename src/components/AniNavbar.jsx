import { AppBar } from '@mui/material'

export const AniNavbar = ({children, position, color, type='horizontal'}) => {
  return (
    <AppBar position={position || 'static'} color={color} sx={{display:'flex', flexDirection: type === 'horizontal' ? 'row' : 'column', alignItems: 'center'}}>
      {children} 
    </AppBar>
  )
}