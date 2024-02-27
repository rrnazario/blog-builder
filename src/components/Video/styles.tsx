import styled from "styled-components";

export const Frame = styled.iframe`
    margin: 10px;
    width: 560px;
    height: 315px;
    border-radius: 20px;
    border: none;

    transition: all .5s ease-in-out;    
    
    @media (max-width: 800px) {
        width: 100%;
    }
`