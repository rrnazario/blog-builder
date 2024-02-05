import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    width: 120px;
    height: 30px;
    background: #4f6ee4;
    color: white;
    font-weight: bold;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease-in-out;

    &:hover {
        background: #f78da7;
    }
`