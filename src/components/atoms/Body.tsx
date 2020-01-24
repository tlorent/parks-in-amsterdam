import React, { FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components/macro';

export type BodySize = 'small' | 'regular';
interface Props extends HTMLAttributes<HTMLParagraphElement> {
    size?: BodySize;
}

const Body: FC<Props> = ({ children, ...props }) => (
    <StyledBody {...props}>{children}</StyledBody>
);

const smallCss = css`
    font-size: 14px;
`;

const regularCss = css`
    font-size: 16px;
`;

const getCss = (size: BodySize) => {
    switch (size) {
        case 'small':
            return smallCss;
        case 'regular':
            return regularCss;
        default:
            throw new Error(size);
    }
};

const StyledBody = styled.p<Props>`
    ${({ size = 'regular' }) => getCss(size)};

    line-height: 24px;
    letter-spacing: 0.8px;
`;

export default Body;
