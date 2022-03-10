import React from 'react'
import styled from 'styled-components'
const Logo = styled.h1 `
display:inline-block;
font-family: "Pacifico",cursive;
color: ${props => props.theme.text};

position:fixed;
left:2rem;
top:2rem;
z-index:3;
`
function LogoComponent() {


  return (
    <Logo>
            MN
    </Logo>
  )
}

export default LogoComponent