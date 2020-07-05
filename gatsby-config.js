require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Tim Schmidt",
    description: "Just another personal website",
    author: "Tim Schmidt",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Lato", "Roboto Slab"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Tim Schmidt",
        short_name: "Tim Schmidt",
        description: "Just another personal website",
        start_url: "/",
        background_color: "#14213d",
        theme_color: "#14213d",
        display: "standalone",
        icon: "src/assets/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripeMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
  ],
}
