import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import HomeButton from '../subComponents/HomeButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import { darkTheme } from './Themes'
import SpaceBoy from '../assets/Images/spaceman.png'
import MainTitle from '../subComponents/MainTitle'

const Box  = styled.div`
  display:flex;
  width:100vw;
  height:100vh;
  background-color:${props=>props.theme.body};
  position:relative;
  overflow:hidden;
`
const float = keyframes`
  0%{transform: translateY(-10px)}
  50%{transform: translateY(15px) translateX(15px)}
  100%{transform: translateY(-10px)}
`
const Spaceboy = styled.div`
  position:absolute;
  top:10%;
  right:5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img{
    width:100%:
    height:auto;
  }
`
const Main = styled.div`
width:50vw;
height:60vh;
padding:2rem;
z-index:3;
line-height:1.5;
font-size:calc(0.6rem + 1vw);

border:2px solid ${props => props.theme.text};
color: ${props => props.theme.text};

display:flex;
justify-content:center;
align-items: center;

position:absolute;
top:10rem;
left: calc(5rem + 5vw);

font-family: "Ubuntu Mono", monospace;
font-style: italic;

`
const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark"/>
        <HomeButton/>
        <SocialIcon theme="dark"/>
        <Spaceboy>
            <img src={SpaceBoy} alt=""/>
        </Spaceboy>
        <Main>
          I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
          <br/><br/>
          I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
          <br/><br/>
          I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </Main>
        <MainTitle text="ABOUT" right="10%" top="10%" left="10%"/>
      </Box>
    </ThemeProvider>
  )
}


export default AboutPage