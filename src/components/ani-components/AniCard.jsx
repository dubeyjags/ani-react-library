import { Card, CardContent, CardHeader,CardActions, CardMedia } from '@mui/material'
export default function AniCard({children, header,image, footer, actions}) {
  return (
    <>
    <Card>
      {header && <CardHeader title={header} />}
       {image && <CardMedia
        component="img"
        height="194"
        width={'100%'}
        image={image}
        alt="Paella dish"
      />}
      <CardContent>
        {children}
      </CardContent>
        {footer && <CardActions className='p-3 border-t'>{footer}</CardActions>}
        {actions && <CardActions className='p-3 border-t'>{actions}</CardActions>}
    </Card>
    </>
  )
}
