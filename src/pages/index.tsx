import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Button from '../components/atoms/Button';
import Title from '../components/atoms/Title';
import Body from '../components/atoms/Body';

const Index: FC = () => (
    <Layout>
        <Container>
            <Header>
                <Title>Nature is calling!</Title>
                <Background />
                <Body>
                    Welcome to Parks in Amsterdam. Need your nature fix after
                    walking around the busy streets and canals? Then look around
                    here and pick your favourite park.
                </Body>
                <Link to="/parks">
                    <Button variant="primary">Go to the parks</Button>
                </Link>
            </Header>
            <HeroImage src="assets/heroImage.svg" alt="People in the park" />
        </Container>
    </Layout>
);

const moveIn = keyframes`
    0% {
        opacity: 0.5;
        transform: translateX(-10rem);
    }

    100% {
        opacity: 0.2;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Header = styled.div`
    position: relative;
    align-self: center;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    background-color: #36d39f;
    width: 152px;
    height: 30px;
    opacity: 0.2;
    animation: ${moveIn} 0.8s ease-in;
    transform: translateX(-16px);
`;

const HeroImage = styled.img`
    max-width: 550px;
    transform: translateX(40px);
`;

export default Index;
