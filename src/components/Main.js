import  React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styled, { keyframes } from 'styled-components'
import HomeButton from '../subComponents/HomeButton';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcon from '../subComponents/SocialIcon';
import { YinYang } from './AllSVG';

const Main = () => {

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
    color: ${props=> props.theme.text};
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
    color: ${props=> props.theme.text};
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

    &>:first-child{
      animation: ${rotate} infinite 1.5s linear; 
    }
    &>:last-child{
      padding-top:1rem;
    }
  `
  const [click, setClick] = useState(false);

  const responseClick = () => {
      setClick(!click);
  }



  return (

    
    
    <MainContainer>
      <Container>
        <HomeButton/>
        <LogoComponent />
        <SocialIcon/>

          <Center>
            <YinYang onClick={()=>responseClick()} width={130} height={130} fill="currentColor"/>
            <span>Click Here ...</span>
          </Center>


        <Contact target="_blank" to={{pathname:"mailto:malikmuhsin70@gmail.com"}}>
           <h3>
             Hello here...
           </h3>
        </Contact>
        <Blog  to="/blog">
           <h3>
             Blog
           </h3>
        </Blog>
        <Work  to="/work">
           <h3>
             Work
           </h3>
        </Work>
        <BottomMenu>
          <About  to="/about">
            <h3>
              About
            </h3>
          </About>
          <Skill  to="/skill">
            <h3>
              Skill
            </h3>
          </Skill>
        </BottomMenu>
      </Container>  
     
    </MainContainer>
  )
}

export default Main