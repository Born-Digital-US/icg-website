import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Lasir = (props) => {
  const lasir = props.data.allMarkdownRemark.edges;
  const json = props.data.allLasirSlidesJson.edges;
  return (
    <Layout bodyClass="page-services">
      <SEO title="LASIR" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>LASIR</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {lasir.map(edge => (
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

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="col-12">
          <h2 className="title-3 text-dark mb-4">Slides</h2>
        </div>

          {json.map(edge => (
            <div className="row justify-content-center slide">

                <div className="col-6 col-md-6 col-lg-6 mb-6">
                  {edge.node.image && (
                    <div className="feature-image">
                      <img src={edge.node.image} />
                    </div>
                  )}
                </div>
                <div className="col-6 col-md-6 col-lg-6 mb-6">
                  <h2 className="feature-title">{edge.node.title}</h2>
                  <div className="feature-content">
                    {edge.node.text}
                    <p><a href={edge.node.link}>Read more»</a></p>
                  </div>
                </div>
              </div>
          ))}

      </div>
    </Layout>
  );
};

export const query = graphql`
  query  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/lasir\//" } }
      sort: { fields: [frontmatter___weight, frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
    allLasirSlidesJson {
      edges {
        node {
          id
          title
          text
          link
          image
        }
      }
    }
  }
`;

export default Lasir;
