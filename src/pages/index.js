import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import * as styles from "../components/index.module.css"
import Programs from "../components/programs"
import Testimonials from "../components/testimonials"
import Stats from "../components/stats"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <Hero/>
      <Trips heading="Our Popular Programs"/>
      <Testimonials/>
      <Stats/>
      <Contact/>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
