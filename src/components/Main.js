import { motion } from 'framer-motion';
import  React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styled, { keyframes } from 'styled-components'
import HomeButton from '../subComponents/HomeButton';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcon from '../subComponents/SocialIcon';
import { YinYang } from './AllSVG';
import IntroComponent from './IntroComponent';


const MainContainer = styled.div` 
  background: ${props => props.theme.body};
  width:100vw;
  height:100vh;
  overflow:hidden;
  text: ${props => props.theme.text};
  position:relative;

  h2,h3,h4,h5{
    font-family: 'Kadegrla', sans-serif;
    font-weight: 500;
  }
`
const Container = styled.div`
  padding: 2rem;
`

const Contact = styled(NavLink)`
  color: ${props=> props.theme.text};
  position:absolute;
  top:2rem;
  right:calc(1rem + 2vw);
  z-index:3;
`
const Blog = styled(NavLink)`
  color: ${props=> props.theme.text};
  position:absolute;
  top:50%;
  right:calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index:3;
`

const Work = styled(NavLink)`
color: ${props=> props.click ? props.theme.body : props.theme.text};
position:absolute;
  top:50%;
  left:calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg) ;
  z-index:3;

`
const BottomMenu = styled.div`
  display:flex;
  justify-content: space-evenly;

  position:absolute;
  bottom:2rem;
  left:0;
  right:0;
  width:100%;

`

const About = styled(NavLink)`
  color: ${props=> props.click ? props.theme.body : props.theme.text};
  z-index:3;

`
const Skill = styled(NavLink)`
  color: ${props=> props.theme.text};
  z-index:3;
`

const rotate = keyframes `
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`

const Center = styled.div`
  position:absolute;
  left: ${props => props.click ? "85%" : "50%"};
  top:  ${props => props.click ? "85%" : "50%"};

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  transform: translate(-50%, -50% );
  transition: all 1s;
  z-index:3;
  &>:first-child{
    animation: ${rotate} infinite 1.5s linear; 
  }
  &>:last-child{
    display: ${props => props.click ? "none" : "inline-block"};
    padding-top:1rem;
  }
`

const DarkDiv = styled.div`
  position:absolute;
  top:0;
  bottom:0;
  right:50%;
  width: ${props => props.click ? "100%" : "0%"};
  height: ${props => props.click ? "100%" : "0%"};
  background-color: ${props=> props.theme.text};
  z-index:1;
  transition: 0.5s height ease, 1s width ease 0.5s;
`


const Main = () => {

  const [click, setClick] = useState(false);

  const responseClick = () => {
    setClick(!click);
  }
  

  return (
    <MainContainer>
      <DarkDiv click={click}/>
      <Container>
        <HomeButton/>
        <LogoComponent theme={click ? "dark" : "light"}/>
        <SocialIcon theme={click ? "dark" : "light"}/>

        <Center click={click}>
          <YinYang onClick={()=>responseClick()} width={click ? 130 : 200} height={click ? 130 : 200} fill="currentColor"/>
          <span>Click Here ...</span>
        </Center>


        <Contact target="_blank" to={{pathname:"mailto:malikmuhsin70@gmail.com"}}>
           <motion.h3
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
           >
             Hello here...
           </motion.h3>
        </Contact>
        <Blog  to="/blog">
           <motion.h3
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
           >
             Blog
           </motion.h3>
        </Blog>
        <Work click={click} to="/work">
           <motion.h3
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
           >
             Work
           </motion.h3>
        </Work>
        <BottomMenu>
          <About click={click} to="/about">
            <motion.h3
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
            >
              About
            </motion.h3>
          </About>
          <Skill  to="/skill">
            <motion.h3
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
            >
              Skill
            </motion.h3>
          </Skill>
        </BottomMenu>
      </Container>  
      {click ? <IntroComponent click={click}/> : null}
     
    </MainContainer>
  )
}

export default Main