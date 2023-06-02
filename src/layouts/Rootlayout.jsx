import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AppBreadcrumbs from '../components/AppBreadcrumbs';

const Rootlayout = () => {
  return (
    <>
        <Navbar/>
        <Container sx={{p:3}}>
            <AppBreadcrumbs/>
        </Container>
        <Container sx={{p:5}}>
            <Outlet/>
        </Container>
        <Footer />
    </>
  )
}

export default Rootlayout