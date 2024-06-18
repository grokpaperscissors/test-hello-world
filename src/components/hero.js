import React from 'react'
import styled from 'styled-components'
import { Button } from './button'
import Video from "../assets/videos/piano_keys.mp4"

const Hero = () => {
  return (
    <HeroContainer>
        <HeroBG>
            <VideoBG src={Video} type="video/mp4" autoPlay loop muted playsInline/>
        </HeroBG>
        <HeroContent>
            <HeroItems>
                <HeroH1>Music for Everyone</HeroH1>
                <HeroP>Out of this world</HeroP>
                <Button>Donate Now</Button>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
    background: #9f9f9f;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
`

const HeroBG = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`


const VideoBG = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vh - 1300px)/2);
`

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`

const HeroH1 = styled.h1``

const HeroP = styled.p``