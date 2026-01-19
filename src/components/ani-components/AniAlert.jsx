import { Alert, AlertTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export const AniAlert = ({children, ...props}) => {
    const [open, setOpen] = useState(true);
  return (
        <Alert severity={props.severity || 'info'}
        action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
         {props.heading && <AlertTitle>{props.heading}</AlertTitle>}
        {children}
        </Alert>
  )
}
