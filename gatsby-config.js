/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'Parks in Amsterdam',
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `parks`,
                path: `${__dirname}/parks`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/assets`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
};
