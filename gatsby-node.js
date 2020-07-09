const path = require("path")

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            title
            id
          }
        }
      }
    }
  `)
  data.allContentfulPost.edges.forEach(edge => {
    const slugString = edge.node.title.toLowerCase().split(" ").join("-")
    const slug = `/${slugString}`
    const id = edge.node.id
    actions.createPage({
      path: slug,
      component: path.resolve(`./src/templates/blogPost.js`),
      context: { id: id },
    })
  })
}
