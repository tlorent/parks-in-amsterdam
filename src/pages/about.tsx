import React, { FC } from 'react';
import styled from 'styled-components/macro';
import Layout from '../components/Layout';
import Title from '../components/atoms/Title';
import Body from '../components/atoms/Body';

const About: FC = () => (
    <>
        <Layout>
            <Container>
                <Title>About Parks in Amsterdam</Title>
                <div>
                    <Body>
                        This website was created to help you find the best
                        nature spots in Amsterdam. Our city can be quite
                        overwhelming sometimes, so it is crucial to find some
                        trees and relax in nature.
                    </Body>
                </div>
                <AboutImage src="assets/about.svg" alt="Two men in the park" />
            </Container>
        </Layout>
    </>
);

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    > div {
        max-width: 400px;
        margin: 0 auto;
    }
`;

const AboutImage = styled.img`
    max-width: 400px;
    margin-top: 32px;
`;

export default About;
