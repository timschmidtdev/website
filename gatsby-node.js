const path = require("path")

exports.createPages = async function ({ actions, graphql }) {
  const { data: postData } = await graphql(`
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
  postData.allContentfulPost.edges.forEach(edge => {
    const slug = `/${edge.node.title.toLowerCase().split(" ").join("-")}`
    const id = edge.node.id
    actions.createPage({
      path: slug,
      component: path.resolve(`./src/templates/blogPost.js`),
      context: { id: id },
    })
  })

  const { data: projectData } = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            title
            id
          }
        }
      }
    }
  `)
  projectData.allContentfulProject.edges.forEach(edge => {
    const slug = `/${edge.node.title.toLowerCase().split(" ").join("-")}`
    const id = edge.node.id
    actions.createPage({
      path: slug,
      component: path.resolve(`./src/templates/codeProject.js`),
      context: { id: id },
    })
  })
}
