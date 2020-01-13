import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Islandora Collaboration Group" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
      <div className="intro pb-2">
        <div className="container">
          <h1>Islandora <br/>Collaboration Group</h1>
          <p>
            The Islandora Collaboration Group (ICG) is an inclusive community of practice committed to helping our members make Islandora a sustainable long-term solution for the preservation and access of a wide array of cultural heritage and scholarly materials.
          </p>
        </div>
      </div>

      <div className="container pt-2 pt-md-3">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Our Projects</h2>
          </div>
          {markdown.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about-the-project/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

export default Home;
