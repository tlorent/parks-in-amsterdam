import React, { FC, ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components/macro';

export type ButtonVariant = 'primary' | 'outline';

export type ButtonSize = 'small' | 'regular';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant?: ButtonVariant;
}

const Button: FC<Props> = ({ children, ...props }) => (
    <StyledButton {...props}>{children}</StyledButton>
);

const primaryCss = css`
    background-color: #36d39f;
    color: #fff;

    :hover,
    :focus {
        filter: brightness(98%);
    }
`;

const outlineCss = css`
    border: 1px solid #36d39f;

    :hover,
    :focus {
        color: #fff;
        background-color: #36d39f;
    }
`;

const getCss = (variant: ButtonVariant) => {
    switch (variant) {
        case 'primary':
            return primaryCss;
        case 'outline':
            return outlineCss;
        default:
            throw new Error(variant);
    }
};

const StyledButton = styled.button<Props>`
    border-radius: 4px;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    text-align: center;
    margin-top: 8px;
    font-size: 16px;
    transition: transform 0.3s ease-out;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.1);
    width: fit-content;

    ${({ variant = 'primary' }) => getCss(variant)};

    :hover {
        transform: translateY(-4px);
    }
`;

export default Button;
