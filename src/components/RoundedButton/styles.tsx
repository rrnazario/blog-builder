import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    padding: 10px 40px;
    background: #4f6ee4;
    color: white;
    font-weight: 700;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease-in-out;

    &:hover {
        background: #f78da7;
    }
`