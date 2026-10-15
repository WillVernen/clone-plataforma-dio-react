import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button<{ $variant: 'primary' | 'secondary'; $fullWidth: boolean }>`
    background: #565656;
    border: 0;
    border-radius: 22px;
    position: relative;

    color: #ffffff;
    padding: 2px 12px;
    min-width: 120px;
    min-height: 28px;
    width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 160ms ease, transform 160ms ease;

    &:hover:not(:disabled) {
        opacity: 0.85;
    }

    &:focus-visible {
        outline: 2px solid #ffffff;
        outline-offset: 3px;
    }

    &:disabled {
        cursor: wait;
        opacity: 0.65;
    }

    ${({ $variant }) => $variant === 'secondary' && css`
        min-width: 0;
        min-height: 33px;
        background: #e4105d;
        font-weight: 700;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            inset: -5px;
            border-radius: 22px;
            pointer-events: none;
        }
    `}

    ${({ $variant }) => $variant === 'primary' && css`
        min-width: 64px;
        padding: 2px 10px;
        font-size: 12px;
    `}
`