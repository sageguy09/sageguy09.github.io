module.exports = {
  siteMetadata: {
    title: 'Ryan Sage',
    author: '@sageguyvg',
    siteUrl: 'https://ryansage.dev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ryan Sage',
        short_name: 'Ryan Sage',
        start_url: '/',
        background_color: '#303030',
        theme_color: '#303030',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-151462784-1',
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
