import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'


const Testimonials = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(
                filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"},
                        name: {in: ["portrait-1","portrait-2"]}}) 
                {
                edges {
                node {
                    childImageSharp {
                    gatsbyImageData
                    }}}}}
        `)


  return (
    <TestimonialsContainer>
        <TopLine>
            Testimonials
        </TopLine>
        <Description>
            What people are saying
        </Description>
        <ContentWrapper>
            <ColumnOne>
            <Testimonial>
                <IoMdCheckmarkCircleOutline css={`color: #3fffa8;
                                      font-size: 2rem;
                                      margin-bottom: 1rem`}/>
                <h3>Keanu Reeves</h3>
                <p>"The greatest experience of my life. "</p>
            </Testimonial>
            <Testimonial>
                <FaRegLightbulb css={`color: #f9b19b;
                                      font-size: 2rem;
                                      margin-bottom: 1rem`}/>
                <h3>Reanu Keeves</h3>
                <p>"Wonderful.Ecstatic."</p>
            </Testimonial>
            </ColumnOne>
            <ColumnTwo>
            {data.allFile.edges.map((image, key)=>(
                <TestimonialImage key={key}
                        image = {getImage(image.node.childImageSharp)}
                        alt="Portrait of the testimonial provider"
                    />
            ))}
            </ColumnTwo>
        </ContentWrapper>
    </TestimonialsContainer>
  )
}


export default Testimonials


const TestimonialsContainer=styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px)/2);
    height:  100%;
`
const TopLine=styled.p`
    color: #077bf1;
    font-size: 1rem;
    text-align:left;
    margin-bottom: 0.75rem;
`
const Description=styled.p`
    text-align: start;
    padding-down: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`

const ContentWrapper=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`
const ColumnOne=styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`
const Testimonial=styled.div`
    padding-top: 1rem;
    padding-right: 2rem;
    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    p {
        color; #3b3b3b;
    }
`
const ColumnTwo=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const TestimonialImage = styled(GatsbyImage)`
    border-radius: 10px;
    height: 100%;
`