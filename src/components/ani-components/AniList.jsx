import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

export default function AniList({menu, type}) {
const isActive = (route) => {
  const location = useLocation();
  return location.pathname.startsWith(route);
};
  return (
    <List component="ul" sx={{ display: 'flex', flexDirection: type === 'horizontal' ? 'row' : 'column'}}>
          {menu.map((item, index) => (
            <ListItem component={'li'}  key={index} disablePadding>
              {item.disabled ? (
              <Tooltip title={item.disabled} placement="bottom">
                <ListItemButton disabled={item.disabled} >
                  {item.icon && <ListItemIcon sx={{padding:'0',margin:'0'}}>{item.icon}</ListItemIcon>  }
                  <ListItemText>{item.text} </ListItemText>
                </ListItemButton>
              </Tooltip>
              ) : (
                item.link && item.link ? (
                  <ListItemButton disabled={item.disabled}  key={item.link} component={Link} to={item.link}  selected={isActive(item.link)}>
                    {item.icon && <ListItemIcon sx={{padding:'0',margin:'0'}}>{item.icon}</ListItemIcon>}
                    <ListItemText>{item.text}</ListItemText>
                  </ListItemButton>
                ) : (
                  <>
                    {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                    <ListItemText>{item.text}</ListItemText>
                  </>
                )
              
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
