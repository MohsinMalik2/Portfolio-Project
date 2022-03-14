import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import HomeButton from '../subComponents/HomeButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import { Design, Develope } from './AllSVG'
import { lightTheme } from './Themes'

const Box  = styled.div`
  display:flex;
  justify-content: space-evenly;
  width:100vw;
  height:100vh;
  background-color:${props=>props.theme.body};
  position:relative;
  align-items:center;
`
const Main  = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background: ${props => props.theme.body};
  width: 36vw;
  height: 60vh;
  z-index:3;
  line-height:1.5;
  padding:2rem;
  font-family: "Ubuntu Mono",monospace;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  cursor:pointer;
  &:hover{
    color: ${props => props.theme.body};
    background: ${props => props.theme.text};
  }
`

const Title  = styled.h2`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:calc(1em + 1vw);
  ${Main}:hover &{
    &>*{
      fill: ${props => props.theme.body};
    }
  }

  &>*:first-child{
    margin-right:1rem;
  }
`
const Description = styled.div`
  color:${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  strong{
    text-transform:uppercase;
    margin-bottom:1rem;
  }
  ul,p{
    margin-left:2rem;
  }
  ${Main}:hover &{

      color: ${props => props.theme.body};
 
  }
`
const SkillPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light"/>
        <HomeButton/>
        <SocialIcon theme="light"/>
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
              I love to create design which speaks, Keep it clean, minimal and simple.
          </Description>   
          <Description>
              <strong>
                  I LIKE TO DESIGN
              </strong>
              <ul>
                <li>Web Design</li>
                <li>Mobile Apps</li>
                <li>TOOLS</li>
              </ul>
          </Description>       
          <Description>
             <strong>
                TOOLS
              </strong>
              <p>Figma, Photoshop, Adobe XD etc.</p>
          </Description> 
        </Main>
        <Main>
        <Title>
            <Develope width={40} height={40}/> Frontend Developer
          </Title>
          <Description>
              I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
          </Description>     
          <Description>
             <strong>
                SKILLS
              </strong>
              <p>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc. </p> 
          </Description>   
          <Description>
             <strong>
                TOOLS
              </strong>
              <p>VScode, Github, Codepen etc.</p>
          </Description> 
        </Main>
        
      </Box>
    </ThemeProvider>
  )
}

export default SkillPage