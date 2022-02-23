import React from 'react'

export const LayoutScreen = ({children, background}) => {
  return (
    <main className={`w-screen h-screen ${background && background}`}>
        {children}
    </main>
  )
}
