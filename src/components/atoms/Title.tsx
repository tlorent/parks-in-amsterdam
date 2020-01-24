/* eslint-disable no-confusing-arrow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { FC, HTMLAttributes } from 'react';
import styled, { css, ThemeProvider } from 'styled-components/macro';
import theme from '../../constants/theme';

export type TitleSize = 'small' | 'regular';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    size?: TitleSize;
    withBorder?: boolean;
}

const Title: FC<Props> = ({ children, ...props }) => (
    <ThemeProvider theme={theme}>
        <StyledTitle {...props}>
            <span>{children}</span>
        </StyledTitle>
    </ThemeProvider>
);

const smallCss = css`
    font-size: 32px;
`;

const regularCss = css`
    font-size: 40px;
`;

const getCss = (size: TitleSize) => {
    switch (size) {
        case 'small':
            return smallCss;
        case 'regular':
            return regularCss;
        default:
            throw new Error(size);
    }
};

const StyledTitle = styled.h2<Props>`
    ${({ size = 'regular' }) => getCss(size)};

    > span {
        border-bottom: ${({ withBorder, theme }) => (withBorder ? `8px solid ${theme.colors.parks50}` : 'none')};
    }
`;

export default Title;
