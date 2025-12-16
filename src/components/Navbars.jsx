import { Icon } from '@mui/material'
import { AniNavbar } from './AniNavbar'
import { AniList } from './AniList'
export const Navbars = () => {
  const navbarMenu = [
    {text: 'Home', link: '#', Icon: <Icon>home</Icon>},
    {text: 'About', link: '#', Icon: <Icon>info</Icon>},
    {text: 'Contact', link: '#', Icon: <Icon>phone</Icon>},
  ]
  return (
    <>
    <h1 className='text-3xl'>NavBars</h1>
    <h2 className='text-2xl'>Positions</h2>
    <AniNavbar position="static">
      Position Static | Fixed | Absolute
    </AniNavbar>
    <h2 className='text-2xl'>Colors</h2>
    <AniNavbar   position="static" color={'secondary'}>
      Color Primary | Secondary | Default | Inherit | Transparent
    </AniNavbar>
    <h2 className='text-2xl'>With Menu</h2>
    <AniNavbar type="horizontal" className="flex justify-between">
      logo
      <AniList type="horizontal" menu={navbarMenu} />
      Search
    </AniNavbar>
    </>
  )
}
