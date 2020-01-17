/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components/macro';

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any>;
}

const Template: FC<Props> = ({ data }) => {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    const parkImage = frontmatter?.image?.childImageSharp?.fixed;

    return (
        <>
            <p>{frontmatter.title}</p>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {parkImage ? <StyledImg fixed={parkImage} /> : null}
        </>
    );
};

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                image {
                    childImageSharp {
                        fixed {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`;

const StyledImg = styled(Img)``;

export default Template;
