import styled from "styled-components";

export const Container = styled.div`
    background-color: #f1f1f1;
    transition: all 0.2s ease-in-out;
    height: 300px;
    padding: 10px 16px;
    background: #555;
    color: #f1f1f1;
    display:flex;
    align-items: center;
    justify-content: space-between;

    a:hover {
    color: var(--text-secondary);
  }
`

export const DevFooter = styled.div`    
    display:flex;
    align-items: flex-end;
    flex-direction: column;
    font-weight: 700;

`