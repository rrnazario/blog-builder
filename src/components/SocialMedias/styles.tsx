import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;

    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
    }    
`

export const Icon = styled(FontAwesomeIcon)`
    cursor:pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #f78da7;
    }
`