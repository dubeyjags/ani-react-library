import { AppBar } from '@mui/material'

export const AniNavbar = ({children, color, type='horizontal', ...props}) => {
  console.log(props)
  return (
    <AppBar component={'section'} {...props} color={color} sx={{
      display:type === 'horizontal' ? 'flex' : 'block', 
      flexDirection: type === 'horizontal' ? 'row' : 'column', 
      alignItems: 'center', 
      width: props.maxWidth ? typeof props.maxWidth === "number" ? `${props.maxWidth}px` : props.maxWidth : "100%",
      maxWidth: props.maxWidth ? `${props.maxWidth}px` : 'none',
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