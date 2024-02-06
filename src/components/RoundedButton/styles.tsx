import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    padding: 10px 40px;
    background: var(--text-tertiary);
    color: var(--background);
    font-weight: 700;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease-in-out;

    &:hover {
        background: var(--text-secondary);
    }
`