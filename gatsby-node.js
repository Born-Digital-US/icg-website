const path = require('path');

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            isle: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/isle/" } }
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
            lasir: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/lasir/" } }
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
            projects: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/projects/" } }
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
            team: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/members/" } }
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
            testimonials: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/testimonials/" } }
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
        `,
      ).then((result) => {
        result.data.projects.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/service.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.isle.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/isle.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.lasir.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/lasir.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.team.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/team.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.testimonials.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/testimonial.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        resolve();
      }),
    );
  });
};
