/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components/macro';
import Layout from '../components/Layout';
import Title from '../components/atoms/Title';

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any>;
}

const Parks: FC<Props> = ({ data }) => {
    const { allMarkdownRemark } = data;

    return (
        <Layout>
            <Title withBorder>Parks in Amsterdam</Title>
            <Container>
                {allMarkdownRemark.edges.map((edge: any) => (
                    <ParkContainer>
                        {/* <StyledImg
                            src={node.frontmatter.image.publicURL}
                            alt={node.frontmatter.title}
                        /> */}
                        <StyledImg
                            fixed={
                                edge.node.frontmatter.image.childImageSharp
                                    .fixed
                            }
                        />
                        <StyledLink
                            to={`/parks/${edge.node.fields.slug}`}
                            key={edge.node.frontmatter.title}
                        >
                            {edge.node.frontmatter.title}
                        </StyledLink>
                    </ParkContainer>
                ))}
            </Container>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___title] }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        image {
                            id
                            publicURL
                            childImageSharp {
                                fixed(width: 250, height: 200) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

const Container = styled.div`
    display: flex;
    max-width: 1000px;
    /* padding: 0 50px; */
    flex-wrap: wrap;
    /* margin: 0 auto; */
`;

const StyledLink = styled(Link)`
    color: #000;
    transition: color 0.3s ease, opacity 0.3s ease-out;
    opacity: 0;
    position: absolute;
    top: 40%;
    background: #fff;
    padding: 8px 16px;
    border-radius: 3px;

    :hover {
        color: #36d39f;
    }

    :after {
        background: #36d39f;
        content: '';
        display: block;
        height: 2px;
        transition: width 0.3s ease;
        width: 0;
    }

    :hover::after {
        width: 100%;
    }
`;

const StyledImg = styled(Img)`
    /* margin: 0 0 16px; */
    margin: 0;
    border-radius: 3px;
    transition: filter 0.3s ease;
`;

const ParkContainer = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    align-items: center;
    margin-top: 64px;
    margin-right: 32px;
    transition: transform 0.3s ease;

    position: relative;

    :hover {
        transform: scale(1.03);

        ${StyledLink} {
            /* display: block; */
            opacity: 100%;
            /* top: 40%; */
        }

        ${StyledImg} {
            filter: blur(0.5px);
        }
    }
`;

// const StyledImg = styled.img`
//     margin: 0 0 16px;
//     height: 200px;
// `;

export default Parks;
