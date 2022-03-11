import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Box = styled.div`
    width: calc(10rem + 15vw);
    text-decoration:none;
    padding:1rem;
    // min-height:20rem;
    border:1px solid ${props => props.theme.text};
    color:${props => props.theme.text};
    background:${props => props.theme.body};
    backdrop-filter:blur(2px);
    border-radius:9px;
    box-shadow:0 0 1rem 0 rgba(0,0,0,0.2);
    img{
        width:100%;
        height:10rem;
    }
    
`
const Tags = styled.div`
    margin:1rem 0;

    .tagStyle{
        font-size:0.8rem;
        padding:4px;
        border-radius:4px;
        background:rgba(255,0,0,0.3);
        margin-right:5px;
    }

`
const Title = styled.h3`

    margin-bottom:4px;
    padding:0.7rem 0;
    font-family: "Karla",sans-serif;
    color:inherit;
    border-bottom:1px solid ${props=>props.theme.text};


`

const Visit = styled(NavLink)`
  
    color: ${props => props.theme.body};
    text-align: center;
    vertical-align: middle;
    background-color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    margin-top:15px;
    text-decoration:none;
    display:block;
    width: 30%;

    &:hover{
        background-color: ${props => props.theme.body};
        border: 1px solid ${props => props.theme.text};
        color: ${props => props.theme.text};
        transition: ease 0.6s;
    }

`
const DateTag = styled.span`
    font-size:0.8rem;
    padding:4px;
    border-radius:4px;
    background:rgba(236,236,236,0.8);
    margin-right:3px;
    float:right;
`


function BlogComponent(props) {
  return (
    <Box>
        <img src={props.blog.imgSrc} alt="" />
        <Title>{props.blog.name}</Title>
        <Tags>
            {
                props.blog.tags.map((tags,id) =>{
                    return <span className='tagStyle' key={id}>{tags}</span>
                })
            }
            <DateTag>
                {props.blog.date}
            </DateTag>

        </Tags>
        
        <Visit to={{pathname: "{props.blog.link}"}}>
            Read More
        </Visit>
        
    </Box>
  )
}

export default BlogComponent