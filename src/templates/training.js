import React from "react";
import { graphql } from "gatsby";


const Training = ({data}) => {
    return (
        <div style={{display: "flex", 
                     flexDirection: "column",
                    justifyContent:"center", 
                    alignItems:"center"}}>
            <h1>{data.training.classInformation.title}</h1>
            <p>{data.training.classInformation.description}</p>
            <div>
            <p>{data.training.classInformation.genre}</p>
            <p>{data.training.classInformation.instruments}</p>
            <p>{data.training.coaches.map(coach => <p>{coach}</p>)}</p>
            </div>
        </div>
    )
}

export default Training

export const pageQuery = graphql`
  query($slug: String!) {
    training: contentfulTraining(slug: { eq: $slug }) {
      slug
      indianMusic
      active
      numberOfStudents
      coaches
      classInformation {
        title
        description
        genre
        instruments
      }
    }
  }
`;