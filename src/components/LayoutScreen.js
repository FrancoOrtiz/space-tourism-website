import React from 'react'

export const LayoutScreen = ({children, background}) => {
  return (
    <main className={`relative min-h-screen bg-no-repeat bg-cover ${background && background}`}>
        {children}
    </main>
  )
}
