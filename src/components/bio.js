/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginTop: rhythm(1 / 3),
                minWidth: 70,
                minHeight: 70,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <Intro>
              <p>Written By <strong>{author}</strong> </p>
              <blockquote>
                Your life on Earth has dead. And you are now in the next phase of existence in the universe.
                - Good Place
              </blockquote>
            </Intro>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Intro = styled.div`
  display:flex;
  flex-direction: column;

  p, blockquote {
    margin: 0;
  }

  blockquote {
    font-size: 18px;
    line-height: 22px;
  }
`

export default Bio
