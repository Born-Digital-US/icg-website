import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

const Footer = props => (
  <div className="footer-strip mt-6">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer">
            <h3 className="footer-title">{props.data.site.siteMetadata.title}</h3>
            <ul className="footer-menu">
              <li>
                {' '}
                <Link to="/">Home</Link>
              </li>
              <li className="copyright">
                ©
{' '}
{new Date().getFullYear()}
{' '}
{props.data.site.siteMetadata.title}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
