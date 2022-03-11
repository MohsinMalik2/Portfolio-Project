import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter, YouTube } from '../components/AllSVG'
import { darkTheme } from '../components/Themes'
const Icon = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

position:fixed;
left:2rem;
bottom:0;
z-index:3;

&>*:not(:last-child){
    margin:0.5rem 0;        }
`
const Line = styled.span`
width:2px;
height:8rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body };
`
function SocialIcon(props) {

  
  return (
    <Icon>
        <div>
            <NavLink to={{pathname: "https://buggbear.com"}} target="_blank" style={{color:"inherit"}}>
                <Github width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
            </NavLink>
        </div>
        <div>
            <NavLink to={{pathname: "https://buggbear.com"}} target="_blank" style={{color:"inherit"}}>
                <Twitter width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
            </NavLink>
        </div>
        <div>
            <NavLink to={{pathname: "https://buggbear.com"}} target="_blank" style={{color:"inherit"}}>
                <Facebook width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
            </NavLink>
        </div>
        <div>
            <NavLink to={{pathname: "https://buggbear.com"}} target="_blank" style={{color:"inherit"}}>
                <YouTube width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
            </NavLink>
        </div>
        <Line color={props.theme}/>
    </Icon>
  )
}

export default SocialIcon