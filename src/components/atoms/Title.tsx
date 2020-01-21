import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Title: FC = ({ children, ...props }) => (
    <StyledTitle {...props}>{children}</StyledTitle>
);

const StyledTitle = styled.h2`
    font-size: 40px;
`;

export default Title;
