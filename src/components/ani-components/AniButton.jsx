import Button from "@mui/material/Button";

export default function AniButton  ({type, children, ...props   }) { 
  return (
    <Button variant={(type==="primary" && "contained") || (type==="link" && "text") || "outlined" } 
    {...props}
    >{children}</Button>
    
  )
}