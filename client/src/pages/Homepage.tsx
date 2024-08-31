import React from 'react'
import SideBar from '../components/SideBar'
import Content from '../components/Content'

function Homepage() {
  return (
    <div className='homePage__container'>
        <div className="sidebar"><SideBar/></div>
        <div className="content"><Content/></div>
    </div>
  )
}

export default Homepage
