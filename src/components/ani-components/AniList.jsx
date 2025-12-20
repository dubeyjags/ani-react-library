import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
export default function AniList({menu, type}) {
  return (
    <List component="ul" sx={{ display: 'flex', flexDirection: type === 'horizontal' ? 'row' : 'column'}}>
          {menu.map((item, index) => (
            <ListItem component={'li'}  key={index} disablePadding>
                {item.link ? (
                  <ListItemButton  key={item.link}    component={Link} to={item.link}>
                    {item.Icon && <ListItemIcon>{item.Icon}</ListItemIcon>}
                    <ListItemText>{item.text}</ListItemText>
                  </ListItemButton>
                ) : (
                  <>
                    {item.Icon && <ListItemIcon>{item.Icon}</ListItemIcon>}
                    <ListItemText>{item.text}</ListItemText>
                  </>
                )}
            {item.submenu && (  
                <List component="ul" sx={{ display: 'flex', flexGrow: 1, flexDirection: type === 'horizontal' ? 'row' : 'column'}}>
                    {item.submenu.map((subitem, subindex) => (
                        <ListItem component={'li'}   key={(subitem.text).trim()} disablePadding>
                            <ListItemText>{subitem.text}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            )}
            </ListItem>
          ))}
        </List>
  )
}
