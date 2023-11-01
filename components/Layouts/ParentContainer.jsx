import React from 'react'
import SideBar from './SideBar'

const ParentContainer = ({children}) => {
  return (
    <div className='grid grid-cols-[280px,2fr] gap-10 mx-auto'>
      <SideBar/>
      {children}
    </div>
  )
}

export default ParentContainer
