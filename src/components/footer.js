import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'


const Footer = () => {
  return (
    <FooterContainer>
      <LinksWrapper>
      <FooterDescription>
        <h1>Musically</h1>
        <p>Inclusive music, for everyone</p>
      </FooterDescription>
      <FooterLinkItems>
        <FooterLinkTitle>
          Contact Us
        </FooterLinkTitle>
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/courses">Courses</FooterLink>
        <FooterLink to="/careers">Careers</FooterLink>
        <FooterLink to="/support">Support</FooterLink>
      </FooterLinkItems>
      </LinksWrapper>


      <LinksWrapper>
      <FooterLinkItems>
        <FooterLinkTitle>
          Social Media
        </FooterLinkTitle>
        <FooterLink to="/">YouTube</FooterLink>
        <FooterLink to="/courses">Instagram</FooterLink>
        <FooterLink to="/careers">Facebook</FooterLink>
        <FooterLink to="/support">Discord</FooterLink>
      </FooterLinkItems>
      </LinksWrapper>

    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px)/2);
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;

`

const FooterDescription = styled.div`
  padding: 0 2rem;
  h1 {
    margin-bottom: 3rem;
    color: #f2682e;
    @media screen and (max-width:400px) {
      padding: 1rem
    }
  }
`

const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;

  @media screen and (max-width:820px) {
      grid-template-columns: 1fr;
    }

`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`
