import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3b3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #ffffff;
    width: 100%;
    border: 0;
    height: 30px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #c5c1ce;
    }

    &:focus-visible {
        outline: 2px solid #e4105d;
        outline-offset: 3px;
    }
`

export const ErrorText = styled.p`
    color: #ff829f;
    font-size: 12px;
    margin: -14px 0 12px;
`