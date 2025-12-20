import React from 'react'

export default function AniHeading ({children, type}) {
    const HeadingTag  = type === 'lead' ? 'p' : type || 'h1';
    const sizeClasses = {
        h1: 'text-4xl font-bold',
        h2: 'text-3xl',
        h3: 'text-2xl font-bold',   
        h4: 'text-xl',
        h5: 'text-lg',
        h6: 'text-base font-bold',
    };
  return (
    <HeadingTag className={`mb-4 ${type === 'lead' ? 'text-lg' : sizeClasses[type] || ''}`}>{children}</HeadingTag>
  )
}
