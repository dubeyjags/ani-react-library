import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
export const AniList = ({menu, type}) => {

    
  return (
    <List component="ul" sx={{ display: 'flex', flexDirection: type === 'horizontal' ? 'row' : 'column'}}>
          {menu.map((item, index) => (
            <>
            <ListItem component={'li'}  key={(item.text).trim()} disablePadding>
                {item.link ? (
                  <ListItemButton component={'a'} href={item.link}>
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
            </>
          ))}
        </List>
  )
}
