import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
    margin-top: 48px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;

    @media (max-width: 760px) {
        flex-direction: column;
        margin-top: 32px;
    }
`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #ffffff;
`

export const TitleHighLight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #ffffff70;
`

export const Column = styled.div`
    flex: ${({ $flex }) => $flex};
    min-width: 0;

    @media (max-width: 760px) {
        padding-right: 0;
    }
`