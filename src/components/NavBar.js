import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/NavBar.css"
import {Menu} from '@mui/icons-material'
import { Button, Typography, AppBar, Box, Container,Toolbar, IconButton, } from '@mui/material'

function NavBar() {
    const [navBar, setNavBar] = useState(false)


    return (
        <AppBar position='static'>
            <Toolbar>
                <Link to="/"><Button color='white'><Typography color='white' variant='h6' component='div' sx={{flexGrow:1, display:'flex', width:'30vw',display:{xs:'none', md:'flex'}}}>Samriddhi Dube</Typography></Button></Link>
                <Box className='links' sx={{display:{xs:'none', md:'flex'}}}>
                    <Link to="/"><Button color='inherit'><Typography color='white' variant='body1'> Home </Typography></Button></Link>
                    <Link to="/projects"><Button color='inherit'><Typography color='white' variant='body1'> Research </Typography></Button></Link>
                    <Link to="/resume"><Button color='inherit'><Typography color='white' variant='body1'> CV </Typography></Button></Link>
                    <Link to="/publications"><Button color='inherit'><Typography color='white' variant='body1'> Photography </Typography></Button></Link>
                </Box>
                <Box sx={{display:{xs:'flex',md:'none', alignItems:'right', backgroundColor:'red'}}}>
                    <IconButton size='start' edge='end' color='inherit'>
                        <Menu/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
  )
}

export default NavBar