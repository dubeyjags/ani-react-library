import React from 'react'
import { AniAvatar } from './AniAvatar'

export const Avatars = () => {
  return (
    <>
    <h1 className='text-3xl'>Avatars</h1>
        <div style={{display:'flex'}}><AniAvatar image="https://samplelib.com/lib/preview/jpeg/sample-clouds-400x300.jpg" />
        <AniAvatar letter="AB" />
        <AniAvatar letter="xy" size={50} />
        <AniAvatar letter="PQ" size={100} />
        </div>
    </>
  )
}
