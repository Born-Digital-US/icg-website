import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Sidebar from '../components/SidebarLasir';

const Lasir = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout bodyClass="page-service page-lasir">
      <SEO title={title} />
      <div className="strip strip-white strip-diagonal">
        <div className="container pt-4 pt-md-10 content-page">
          <div className="row justify-content-start">
            <Sidebar />
            <div className="col-7 col-md-7">
              <div className="service service-single xxx">
                <h1 className="title">{title}</h1>
                <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
      }
      html
    }
  }
`;

export default Lasir;
