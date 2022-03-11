import React, { useEffect, useRef } from 'react'
import { Link , Anchor} from '../components/AllSVG'
import styled from 'styled-components'

const Container = styled.div`
    position:relative;
`
const Slider = styled.div`
    position:fixed;
    top:0;
    right:2rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transform: translateY(-100%);
    .chain{
        transform: rotate(135deg);
    }
`
const StillAnchor = styled.div`
    position:absolute;
    top:0;
    right:2rem;
`
const AnchorComponent = (props) => {
    const ref = useRef(null)
    const hiddenRef = useRef(null);

    useEffect(() => {

        const handleScroll = ()=>{
            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let diff = Math.max(bodyHeight -(scrollPosition + windowSize))

            let diffPage = (diff * 100) / (bodyHeight - windowSize);

            ref.current.style.transform =`translateY(${-diffPage}%)`

            if(window.pageYOffset > 5){
                hiddenRef.current.style.display = "none";
            }
            else{
                hiddenRef.current.style.display = "block";
            }

        }

        window.addEventListener("scroll",handleScroll)
            return () => window.removeEventListener("scroll",handleScroll)
        
    }, [

    ])
    
  return (
    <Container>
        <StillAnchor ref={hiddenRef} className="hidden">
            <Anchor width={70} height={70} fill="currentColor"/>
        </StillAnchor>
        <Slider ref={ref}>
            {
                [...Array(props.number)].map((x,id) => {
                    return <Link key={id} width={25} height={25} fill="currentColor" className="chain"/>
                })
            }
            <Anchor width={70} height={70} fill="currentColor"/>
        </Slider>
    </Container>
  )
}

export default AnchorComponent