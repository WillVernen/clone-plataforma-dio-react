import styled, { css } from 'styled-components';

export const AuthContainer = styled.main`
    width: min(90%, 1120px);
    min-height: calc(100vh - 110px);
    margin: 0 auto;
    padding: 48px 0;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(300px, 0.9fr);
    align-items: center;
    gap: clamp(40px, 9vw, 128px);

    @media (max-width: 700px) {
        width: min(88%, 440px);
        min-height: auto;
        padding: 42px 0;
        grid-template-columns: 1fr;
        gap: 36px;
    }
`;

export const IntroText = styled.h1`
    max-width: 390px;
    color: #ffffff;
    font-size: clamp(25px, 3vw, 32px);
    font-weight: 700;
    line-height: 1.38;

    @media (max-width: 700px) {
        max-width: 100%;
        font-size: 25px;
    }
`;

export const FormPanel = styled.section`
    width: 100%;
    max-width: 380px;
    justify-self: end;

    @media (max-width: 700px) {
        justify-self: stretch;
    }
`;

export const FormTitle = styled.h2`
    margin-bottom: 4px;
    color: #ffffff;
    font-size: 30px;
    line-height: 1.25;
`;

export const Subtitle = styled.p`
    margin-bottom: 28px;
    color: #c5c1ce;
    font-size: 14px;
    line-height: 1.5;
`;

export const StatusMessage = styled.p`
    margin: -10px 0 18px;
    font-size: 13px;
    line-height: 1.5;

    ${({ $type }) => $type === 'success' ? css`
        color: #70e3a3;
    ` : css`
        color: #ff829f;
    `}
`;

export const AuthFooter = styled.p`
    margin-top: 12px;
    color: #c5c1ce;
    font-size: 12px;
    line-height: 1.5;
`;

export const AuthLink = styled.a`
    color: #70e3a3;
    font-weight: 700;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &:focus-visible {
        outline: 2px solid #70e3a3;
        outline-offset: 3px;
    }
`;
