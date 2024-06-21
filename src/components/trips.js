import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MdLibraryMusic } from "react-icons/md";
import { Button } from './button'


const Trips = ({heading}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
                }}}}}} 
  `)

  function getTrips(data){
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, index) => {
      const image = getImage(item.node.img.childImageSharp)
      tripsArray.push(
        <ProductCard key={index}>
          <ProductImage image={image}
               alt={item.node.alt}/>
          <ProductInfo>
            <TextWrap>
              <MdLibraryMusic/>
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <Button to="/trips" primary="true"
                    round="true" css={`
                                    position: absolute;
                                    top: 420px;
                                    margin-top: 10px;
                                    font-size: 14px;`}>{item.node.button}</Button>
          </ProductInfo>
        </ProductCard>
      )
    });
    return tripsArray
  }


  return (
    <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>{getTrips(data)}</ProductWrapper>
    </ProductsContainer>
  )

}

export default Trips


const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) /2);
  color: #fff;

`

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  font-weight: 920;
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
  grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
  grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`

const ProductImage = styled(GatsbyImage)`
  width: 100%;
  height: 500px;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover{
    filter: brightness(100%);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`