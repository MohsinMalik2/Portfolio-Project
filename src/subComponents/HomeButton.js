import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSVG'



const HomeButton = () => {

    const Power = styled.button`
        position:fixed;
        left:50%;
        top:2rem;
        transform: translate(-50%,0);

        background: #FCF6F4;
        border-radius:50%;
        border:1px solid #000;
        width:2.5rem;
        height:2.5rem;
        padding:0.3rem;

        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        z-index:3;

        &:hover{
            background: rgba(0,255,0,0.4);
            box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
       }
       &>*:first-child{
           text-decoration:none;
           color:inherit;
       }
    `
  return (
    <Power>
        <NavLink to="/">
           <PowerBtn fill="currentColor" width={30} height={30}/>
        </NavLink>
    </Power>
  )
}

export default HomeButton