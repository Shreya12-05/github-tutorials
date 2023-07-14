import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
      <div>
        <h1>shreya</h1>
        {children}
      </div>
    </div>
  )
}

export default Layout
