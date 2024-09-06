import React from 'react'
import { LinkedIn, Email } from '@mui/icons-material'
import '../styles/Footer.css'
import { Typography,Button } from '@mui/material'

function Footer() {
  return (
    <div className='footer'>
        <div className='socials'>
            <Button sx={{color: 'white'}} href="https://www.linkedin.com/feed/"><LinkedIn/></Button>
            <Button sx={{color:'white'}}><Email/></Button>
        </div>
        <Typography variant='caption'> &copy; 2024 samriddhidube.github.io</Typography>
        {/* <Typography variant='caption'> by Govind Nair</Typography> */}
    </div>
  )
}

export default Footer