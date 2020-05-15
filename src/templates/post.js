import { graphql } from "gatsby"
import React, { Component } from "react"
import Layout from "../components/layout"
// import PropTypes from "prop-types"
import Img from "gatsby-image"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    let facebook = ""
    let twitter = ""

    if (post.acf !== null) {
      if (post.acf.facebook !== "") {
        facebook = `<h3>Facebook</h3> ${post.acf.facebook}`
      }
      if (post.acf.twitter !== "") {
        twitter = `<h3>Twitter</h3> ${post.acf.twitter}`
      }
    }

    return (
      <Layout>
        {post.featured_media && (
          <Img fluid={post.featured_media.localFile.childImageSharp.fluid} />
        )}
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <div dangerouslySetInnerHTML={{ __html: facebook }} />
        <div dangerouslySetInnerHTML={{ __html: twitter }} />
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      acf {
        facebook
        twitter
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
