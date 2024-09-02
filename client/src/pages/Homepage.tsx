import React, { useEffect } from 'react'
import SideBar from '../components/SideBar'
import Content from '../components/Content'
import { Outlet, useNavigate } from 'react-router-dom'

function Homepage() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/allTask")
  }, [])
  return (
    <div className='homePage__container'>
      <div className="sidebar"><SideBar /></div>
      <div className="content"><Outlet /></div>
    </div>
  )
}

export default Homepage
