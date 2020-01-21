import React, { FC } from 'react';
import styled from 'styled-components/macro';
import Nav from './Nav';
// import Footer from './Footer';

const Layout: FC = ({ children }) => (
    <Container>
        <Nav />
        <div>{children}</div>
        {/* <Footer /> */}
    </Container>
);

const Container = styled.div`
    max-width: 1100px;
    margin: 2rem auto;
    padding: 0 32px;
    height: 100%;
`;

export default Layout;
