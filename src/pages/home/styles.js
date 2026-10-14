import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 760px) {
        max-width: 88%;
        margin-top: 56px;
        flex-direction: column;
        gap: 32px;

        > div,
        p {
            width: 100%;
        }
    }
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #ffffff;
`

export const TitleHighLight = styled.span`
    color: #e4105d;
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    max-width: 420px;
    margin-bottom: 20px;
    line-height: 22px;

    color: #ffffff;
`