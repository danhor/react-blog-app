import React from 'react'
import { Typography } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { styled } from '@mui/material';


const StyledLinkButton = styled(NavLink)({
    textDecoration:'none',
    color:'#fff',
    fontSize:20,
    "&.active": {
      background:'navy',
    },
    background:'#1876D1',
    paddingTop:10,
    paddingLeft:13,
    paddingRight:13,
    paddingBottom:10,
    borderRadius:50
})

const BlogLayout = () => {
  return (
    <>
      <Typography variant="h2">Blog</Typography>
      <Typography variant="body1" color='black'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>

      <Box sx={{display:'flex',alignItems:'left',justifyContent:'left',my:2,gap:0}}>
        <StyledLinkButton className="btn btn-primary" to='allposts'>Manage Blog</StyledLinkButton>
        {/* <StyledLinkButton className="btn btn-primary" to='favorites'>Favorites</StyledLinkButton> */}
        {/* <StyledLinkButton className="btn btn-primary" to='create'>Create post  </StyledLinkButton> */}
      </Box>

      <Outlet/>

    </>
  )
}

export default BlogLayout;