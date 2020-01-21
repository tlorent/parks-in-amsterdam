import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Body: FC = ({ children }) => <StyledBody>{children}</StyledBody>;

const StyledBody = styled.p`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.8px;
`;

export default Body;
