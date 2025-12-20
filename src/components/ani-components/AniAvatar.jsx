import { Avatar } from '@mui/material'
import React from 'react'

export default function AniAvatar ({image, letter,size}) {
  return (
    <>
      <Avatar src={image} sx={{ width: size || 40, height: size || 40 }}>{!image && letter}</Avatar> 
    </>
  )
}
