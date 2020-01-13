import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query  {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/isle\//" } }
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
    }`}
    render={data => (
      <aside className="main-sidebar col-4 col-md-4 mb-1">
        <h4>ISLE</h4>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.path}>
              <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
            </li>
          ))}
        </ol>
      </aside>
    )}
  />
)
;
