import React from 'react'
import { AniList } from './ani-components'
import { Icon } from '@mui/material'

export const Lists = () => {
    const list = [
    {text: 'List Item 1'},
    {text: 'List Item 2'},
    {text: 'List Item 3'},
  ]
      const listWithIcons = [
    {text: 'List Item 1', Icon: <Icon>home</Icon>},
    {text: 'List Item 2', Icon: <Icon>info</Icon>},
    {text: 'List Item 3', Icon: <Icon>phone</Icon>},
  ]
  const listwithLinks = [
    {text: 'Home', link: '#', Icon: <Icon>home</Icon>},
    {text: 'About', link: '#', Icon: <Icon>info</Icon>},
    {text: 'Contact', link: '#', Icon: <Icon>phone</Icon>},
  ]
  return (
    <>
    <h1 className='text-3xl' id='lists'>Lists</h1>
    <h2 className='text-2xl'>Horizontal</h2>
    <AniList type="horizontal" menu={list} />
    <h2 className='text-2xl'>Vertical</h2>
    <AniList type="vertical" menu={list} />
    <h2 className='text-2xl mb-0 mt-2'>With Icons</h2>
    <AniList type="horizontal" menu={listWithIcons} />
    <h2 className='text-2xl mb-0 mt-2'>With Links</h2>
    <AniList type="horizontal" menu={listwithLinks} />
    </>
  )
}
