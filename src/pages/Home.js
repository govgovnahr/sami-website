import React from 'react'
import { Typography } from '@mui/material'
import profile from '../assets/profile.png'
import "../styles/Home.css"
 
function Home() {
  return (
    <div className="home">
      <div className="about">
        <Typography variant="h3">Hello I am Sami</Typography>
      </div>
      <div className="aboutBody">
        <div className='prompt'>
          <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
        </div>
        <div className='image'>
          <img src={profile}/>
        </div>
      </div>
    </div>
  )
}

export default Home