import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import img from '../assets/Images/bgBlog.jpg'
import HomeButton from '../subComponents/HomeButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import BlogComponent from './BlogComponent'
import {Blogs} from "../data/BlogData"
import AnchorComponent from '../subComponents/AnchorComponent'

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  backrground-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  
  wdith:100vw;
  min-height:100vh;
`
const Container = styled.div`
  padding-bottom: 0.5rem;
  background: rgba(${props=>props.theme.bodyRgba},0.7);
  width:100%;
  min-height:100vh;
  height:auto;
  position:relative;
`

const Center = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding-top:10rem;
`
const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(2,minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`
const BlogPage = () => {

  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
  let num = (window.innerHeight - 70) / 30;
  setNumbers(parseInt(num));
  }, [])
  


  return (
    <MainContainer>
      <Container>
        <HomeButton/>
        <LogoComponent/>
        <SocialIcon/>
        <AnchorComponent number={numbers}/>
        <Center>
          <Grid>
            {
              Blogs.map(blog =>{
                return <BlogComponent key={blog.id} blog={blog}/>
              })
            }
          </Grid>
        </Center>

      </Container>
    </MainContainer>
  )
}

export default BlogPage