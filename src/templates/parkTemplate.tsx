/* eslint-disable no-console */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
// import styled from 'styled-components/macro';
import styled from 'styled-components/macro';
import Layout from '../components/Layout';
import Title from '../components/atoms/Title';

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any>;
}

const Template: FC<Props> = ({ data }) => {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    console.log(frontmatter);
    console.log(html);
    // const parkImage = frontmatter?.image?.childImageSharp?.fixed;

    return (
        <Layout>
            <Title withBorder>{frontmatter.title}</Title>
            {/* {parkImage ? <StyledImg fixed={parkImage} /> : null} */}
            <Container dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
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

const Container = styled.div`
    /* width: 500px; */
`;

// const StyledImg = styled(Img)``;

export default Template;
