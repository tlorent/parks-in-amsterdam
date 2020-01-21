import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'gatsby';

interface LinkProps {
    to: string;
}

const ListLink: FC<LinkProps> = ({ to, children }) => (
    <li>
        <StyledLink to={to} activeStyle={{ color: '#36d39f' }}>
            {children}
        </StyledLink>
    </li>
);

const Nav: FC = () => (
    <Navigation>
        <Link to="/">
            <Logo src="assets/logo.png" alt="Parks in Amsterdam logo" />
        </Link>
        <Links>
            <ListLink to="/parks">Parks</ListLink>
            <ListLink to="/about">About</ListLink>
        </Links>
    </Navigation>
);

const Navigation = styled.div`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem auto;
`;

const Logo = styled.img`
    border-radius: 50%;
    height: 50px;
    width: 50px;
`;

const Links = styled.div`
    font-size: 16px;
    width: 110px;
    display: flex;
    justify-content: space-between;
`;

const StyledLink = styled(Link)`
    color: #000;
    transition: color 0.3s ease;

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

export default Nav;
