module.exports = {
  pathPrefix: '/sageguy09.github.io/',
  siteMetadata: {
    title: 'Ryan Sage',
    author: '@sageguyvs',
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
        trackingId: process.env.GOOGLE_ANALYTICS_BUILD_PERSONAL_WEBSITE,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
