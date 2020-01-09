import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Team = (props) => {
  const teams = props.data.team.group;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-teams">
      <SEO title="Members" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Meet The Team</h1>
              <p>
                Our team of qualified accountants and financial consultants can help your business
                at any stage of it’s growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-6">
        <div className="row">
          <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="title-3 text-dark mb-4">Our Members</h2>
              </div>
              {json.map(edge => (
                <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
                  <div className="feature">
                    {edge.node.image && (
                      <div className="feature-image">
                        <a href={"#" + edge.node.cid}><img src={edge.node.image} /></a>
                      </div>
                    )}
                    <h2 className="feature-title"><a href={"#" + edge.node.cid}>{edge.node.title}</a></h2>
                    <div className="feature-content"><a href={edge.node.repository_url} target="_blank">{edge.node.repository_name}</a></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {teams.map(group => (
            <div className="col-12">
              <div className="row">
              {group.edges.map(edge => (
                <div id={edge.node.frontmatter.cid} key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
                  <div className="team card-two">
                    <div className="card-header">
                      <div className="card-header-left">
                        {edge.node.frontmatter.image && (
                          <div className="card-image">
                            <img
                              alt={edge.node.frontmatter.title}
                              className="img-fluid mb-2"
                              src={edge.node.frontmatter.image}
                            />
                          </div>
                        )}
                      </div>
                      <div className="card-right">
                        <h2 className="card-title">{edge.node.frontmatter.title}</h2>
                        <ul className="card-meta">
                          <li>
                            <strong>{edge.node.frontmatter.jobtitle}</strong>
                          </li>
                          <li>
                            <a target="_blank" href={edge.node.frontmatter.linkedinurl}>
                              {edge.node.frontmatter.linkedinurl}
                            </a>
                          </li>
                          <li>
                            <a href={edge.node.frontmatter.email}>{edge.node.frontmatter.email}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="team-content"
                      dangerouslySetInnerHTML={{ __html: edge.node.html }}
                    />
                  </div>
                </div>
              ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TeamQuery {
  team: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/team/"}}, sort: {fields: [frontmatter___cid], order: DESC}) {
    group(field: frontmatter___cid) {
      fieldValue
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
            image
            jobtitle
            linkedinurl
            email
            cid
          }
        }
      }
    }
  }
  allFeaturesJson(sort: {fields: cid, order: ASC}) {
    edges {
      node {
        id
        title
        repository_name
        repository_url
        image
        cid
      }
    }
  }
}
`;

export default Team;
