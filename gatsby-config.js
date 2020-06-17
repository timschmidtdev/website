/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Tim Schmidt',
    description: 'Just another personal website',
    author: 'Tim Schmidt',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Lato',
          'Roboto Slab',
        ],
        display: 'swap',
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Tim Schmidt',
        short_name: 'Tim Schmidt',
        description: 'Just another personal website',
        start_url: '/',
        background_color: '#14213d',
        theme_color: '#14213d',
        display: 'standalone',
        icon: 'src/assets/images/favicon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
}
