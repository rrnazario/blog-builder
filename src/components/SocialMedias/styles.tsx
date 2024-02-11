import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
    margin: 10px;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;       
`

export const Icon = styled(FontAwesomeIcon)`
    cursor:pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: var(--text-secondary);
    }

    padding-right: 15px;
`