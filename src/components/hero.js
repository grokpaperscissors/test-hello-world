import React from 'react'
import styled from 'styled-components'
import { Button } from './button'
import Video from "../assets/videos/piano_keys.mp4"

const Hero = () => {
  return (
    <HeroContainer>
        <HeroBG>
            <VideoBG src={Video} type="video/mp4" autoPlay loop muted playsInline/>
            <Overlay/>
        </HeroBG>
        <HeroContent>
            <HeroItems>
                <HeroH1>Music for Everyone</HeroH1>
                <HeroP>Inclusive music</HeroP>
                <Button primary = "true" big="true" round="true" to="/trips">Donate Now</Button>
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

    // overlay

    // :before {
    //     content: "",
    //     position: absolute;
    //     top: 0;
    //     bottom: 0;
    //     right: 0;
    //     left: 0;
    //     z-index: 2;
    //     background: linear-gradient(
    //                     180deg, 
    //                     rgba(0,0,0,0.2) 0%, 
    //                     rgba(0,0,0,0.6) 100%
    //                     ),
    //                 linear-gradient(
    //                 180deg, 
    //                 rgba(0,0,0,0.2) 0%, 
    //                 transparent 100%);

    // }
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

const Overlay = styled.div`
  position: absolute;  // Same positioning to cover the video
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);  // Semi-transparent black
  z-index: 1;  // Ensures it's above the video
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

const HeroH1 = styled.h1`
    // resize the font based on screen size
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    font-weight: bold;
    padding: 0 1rem;
`

const HeroP = styled.p`
    font-size: clamp(1rem, 3vw, 3.5rem);
    margin-bottom: 2rem;
    font-weight: 400;
`

