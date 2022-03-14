import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github } from '../components/AllSVG'


const Box=styled.li`
    width:16rem;
    height:40vh;
    background-color:${props => props.theme.text};
    color: ${props => props.theme.body};
    padding:1.5rem 2rem;
    margin-right: 8rem;
    border-radius: 0 50px 0 50px;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border: 1px solid ${props => props.theme.body};
    transition: all 0.2s ease;
    cursor:pointer;

    &:hover{
        background-color:${props => props.theme.body};
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};

    }
`

const Title = styled.h2`
    font-size: calc(1em + 0.5vw);
`
const Description = styled.h2`
    font-size: calc(0.8em + 0.3vw);
    font-family: 'Karla',sans-serif;
    font-weight:500;
`
const Tags = styled.div`
    border-top:2px solid ${props => props.theme.body};

    display:flex;
    flex-wrap:wrap;
    padding-top:0.5rem;

    ${Box}:hover &{
    border-top:2px solid ${props => props.theme.text};

    }
`
const Tag = styled.span`
    margin-right: 1rem;
`

const Footer = styled.footer`
    display:flex;
    justify-content:space-between;
`

const Link = styled(NavLink)`
    background-color:${props => props.theme.body};
    color: ${props => props.theme.text};
    text-decoration:none;
    border: 1px solid ${props => props.theme.text};
    border-radius: 0 0 0 50px;

    padding:0.5rem calc(2rem + 2vw);
    font-size:calc(1em + 0.5vw);

    ${Box}:hover &{
            background-color:${props => props.theme.text};
            color: ${props => props.theme.body};
            border-top:2px solid ${props => props.theme.text};
        }

`

const Git = styled(NavLink)`
        text-decoration:none;
        color:inherit;
        ${Box}:hover &{
           &>*{
               fill: ${props => props.theme.text};
           }
        }


`


const item = {
    hidden:{scale:0},
    show:{
      scale:1,
      transition: {
        type:"spring",
        duration:0.5,
      }
    }
  } 


const WorkCard = (props) => {
  return (
    <Box key={props.data.id} variants={item}>
        <Title>{props.data.name}</Title>
        <Description>{props.data.description}</Description>
        <Tags>
            {
                props.data.tags.map((tags,id) =>{
                    return <Tag key={id}>#{tags}</Tag>
                })
            }
        </Tags>
        <Footer>
            <Link to={{pathname: `${props.data.demo}`}}>
                Visit
            </Link>
            <Git to={{pathname: `${props.data.demo}`}}>
                <Github width={30} height={30} />
            </Git>
        </Footer>
    </Box>
  )
}

export default WorkCard