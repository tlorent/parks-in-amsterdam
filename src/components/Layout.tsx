import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import Nav from './Nav';
import theme from '../constants/theme';

const Layout: FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Container>
            <Nav />
            <div>{children}</div>
        </Container>
    </ThemeProvider>
);

const Container = styled.div`
    max-width: 1100px;
    margin: 2rem auto;
    padding: 0 32px;
    height: 100%;
`;

export default Layout;
