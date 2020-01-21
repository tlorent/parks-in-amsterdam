import React, { FC } from 'react';
import styled from 'styled-components/macro';
import getYear from 'date-fns/getYear';

const year = getYear(new Date());

const Footer: FC = () => (
    <Container>
        <p>
            {`Parks in Amsterdam | ${year} | `}
            <span>
                <a href="https://www.gatsbyjs.org/">Built with Gatsby</a>
            </span>
        </p>
    </Container>
);

const Container = styled.footer`
    font-size: 14px;

    a {
        color: #000;

        :hover {
            color: #542b85;
        }
    }
`;

export default Footer;
