/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allContentfulTraining {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.log("Error with Contentful data", result.errors);
    return;
  }

  const trainingTemplate = path.resolve('./src/templates/training.js');

  result.data.allContentfulTraining.edges.forEach(async (training) => {
    const slash = await import('slash').then(mod => mod.default);

    createPage({
      path: `/training/${training.node.slug}/`,
      component: slash(trainingTemplate),
      context: {
        slug: training.node.slug,
      },
      defer: true,
    });
  });
};
