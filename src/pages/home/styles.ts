import styled from 'styled-components';

export const Container = styled.main`
    width: min(88%, 1120px);
    margin: 0 auto;
    padding: clamp(48px, 12vh, 120px) 0;
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    align-items: center;
    gap: clamp(24px, 5vw, 72px);

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 900px) {
        width: min(88%, 640px);
        padding: 48px 0;
        grid-template-columns: 1fr;
        gap: 32px;
    }
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: clamp(28px, 4vw, 40px);
    max-width: 420px;
    margin-bottom: 20px;
    line-height: 1.3;

    color: #ffffff;
`

export const TitleHighLight = styled.span`
    color: #e4105d;
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: clamp(15px, 1.4vw, 18px);
    max-width: 480px;
    margin-bottom: 20px;
    line-height: 1.6;

    color: #ffffff;
`