import { AniList, AniNavbar } from './ani-components'
import AbcIcon from '@mui/icons-material/Abc';
export const Navbars = () => {
  const navbarMenu = [
    {text: 'Home', link: '#'},
    {text: 'About', link: '#'},
    {text: 'Contact', link: '#'},
  ]
  return (
    <>
    <h1 className='text-3xl' id='navbars'>NavBars</h1>
    <h2 className='text-2xl'>Positions</h2>
    <AniNavbar position="static">
      Position Static | Fixed | Absolute
    </AniNavbar>
    <h2 className='text-2xl'>Colors</h2>
    <AniNavbar   position="static" color={'secondary'}>
      Color Primary | Secondary | Default | Inherit | Transparent
    </AniNavbar>
    <h2 className='text-2xl'>Horizontal Navbar <AbcIcon /> </h2>
    <AniNavbar type="horizontal" className='justify-content-between' bgcolor={'#b4b4b4'} color={'#000'}>
      logo
      <AniList type="horizontal" menu={navbarMenu} />
      Search
    </AniNavbar>
    <h2 className='text-2xl'>Vertical Navbar </h2>
    <AniNavbar type="vertical">
      logo
      <AniList type="vertical" menu={navbarMenu} />
      Search
    </AniNavbar>
    </>
  )
}
