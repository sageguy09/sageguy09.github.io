module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Ryan Sage","short_name":"Ryan Sage","start_url":"/","background_color":"#303030","theme_color":"#303030","display":"minimal-ui","icon":"src/assets/images/favicon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"anonymize":true,"respectDNT":true},
    }]
