import React from 'react'
import styled from 'styled-components'
import Image from '../assets/Images/profile-img.png'
import {motion} from 'framer-motion'
const Box = styled(motion.div)`

    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);

    width:55vw;
    height:55vh;
    display:flex;

   
    background: linear-gradient(to right, ${props => props.theme.body} 50%, ${props => props.theme.text} 50%) bottom,
    linear-gradient(to right, ${props => props.theme.body} 50%, ${props => props.theme.text} 50%) top;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    background-repeat:no-repeat;
    background-size:100% 2px;
    z-index:1;
`

const SubBox = styled.div`
 width:50%;
 display:flex;
 position:relative;
 .pict{
    position:absolute;
    left:50%;
    bottom:0;
    transform: translate(-50%,0%);
    width:100%;
    height:auto;

 }
`

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${props => props.theme.body};
  padding: 2rem;
  cursor:pointer;

  display:flex;
  flex-direction:column;
  justify-content: space-evenly;

  &>*:last-child{
      color: ${props => `rgba( ${props.theme.bodyRgba},0.6)`};
      font-size: calc(0.5rem + 1.5vw);
      font-weight:300;
  }

`


function IntroComponent(props) {
  return (
    <Box
    initial={{height:0}}
    animate={{height:'55vh'}}
    transition={{type:"spring",duration:2, delay: 1 }}
    >
        <SubBox>
            <Text>
                <h1>Hi,</h1>
                <h3>A line to describe something</h3>
                <h6>Another line to set what to day and what to say,</h6>
            </Text>
        </SubBox>
        <SubBox>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1, delay: 2 }}
            >
                <img className="pict" src={Image}  alt="Profile " />
            </motion.div>
        </SubBox>
    </Box>
  )
}

export default IntroComponent