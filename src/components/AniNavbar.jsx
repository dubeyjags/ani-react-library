import { AppBar } from '@mui/material'

export const AniNavbar = ({children, type='horizontal', ...props}) => {
  return (
    <AppBar component={'section'} {...props} color={props.color} sx={{
      display:type === 'horizontal' ? 'flex' : 'block', 
      flexDirection: type === 'horizontal' ? 'row' : 'column', 
      alignItems: 'center', 
      width: props.maxwidth ? typeof props.maxwidth === "number" ? `${props.maxwidth}px` : props.maxwidth : "100%",
      maxWidth: props.maxwidth ? `${props.maxwidth}px` : 'auto',
      height: props.height ? props.height : 'auto',
      overflowY: props.height ? 'auto' : 'visible',
      position: props.placement ? 'fixed' : 'static',
      left: props.placement === 'right' ? 'auto' : '0',
      right: props.placement === 'left' ? 'auto' : '0',
      top: props.placement === 'top' ? '0' : 'auto',
      bottom: props.placement === 'bottom' ? '0' : 'auto',
      }}>
      {children} 
    </AppBar>
  )
}