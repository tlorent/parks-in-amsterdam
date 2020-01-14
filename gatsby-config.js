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
                name: `blog`,
                path: `${__dirname}/parks`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-netlify-cms`,
    ],
};
