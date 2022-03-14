import React, { useEffect, useRef } from 'react'
import styled, {  ThemeProvider } from 'styled-components'
import {motion} from 'framer-motion'

import HomeButton from '../subComponents/HomeButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import { darkTheme } from './Themes'
import {Work} from "../data/WorkData"
import WorkCard from '../subComponents/WorkCard'
import { YinYang } from './AllSVG'
import MainTitle from '../subComponents/MainTitle'

const Box  = styled.div`
  display:flex;
  height:400vh;
  background-color:${props=>props.theme.body};
  position:relative;
  overflow:hidden;

`
const Main = styled(motion.ul)`
  position:fixed;
  top:12rem;
  left: calc(10rem + 15vw);
  height:40rem;
  display:flex;
  color:${props => props.theme.text};
  margin-left:90px;
`

const Icon = styled.span`
  position:fixed;
  bottom:2rem;
  right:2rem;

  width:80px;
  height:80px;
  z-index:1;
  display:block;

`

const container = {
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition: {
      staggerChildren:0.5,
      duration:0.5,
    }
  }
}
const WorkPage = () => {

  const ref = useRef(null);
  const IconRotate = useRef(null);

  useEffect(() => {
      let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      IconRotate.current.style.transform = `rotate( ` + -window.pageYOffset + `deg)`;
    }
    window.addEventListener("scroll",rotate)
      return () => window.removeEventListener("scroll",rotate)
  }, [])


  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
          <LogoComponent theme="dark"/>
          <HomeButton/>
          <SocialIcon theme="dark"/>
          <Main ref={ref} variants={container} initial='hidden' animate='show'>
             {
               Work.map( (d,index) => {
                 return <WorkCard key={index}  data={d}/>
               })
             }
          </Main>
          <Icon ref={IconRotate}>
            <YinYang width={80} height={80} fill={darkTheme.text}/>
          </Icon>
          <MainTitle text="WORK" right="10%" top="10%" left="10%"/>
      </Box>
    </ThemeProvider>
  )
}


export default WorkPage