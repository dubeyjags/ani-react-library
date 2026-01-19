import { Tooltip } from '@mui/material'
export const AniTooltip = ({ children, ...props }) => {
  return (
    <Tooltip {...props}>
        {children}
    </Tooltip>
  )
}
