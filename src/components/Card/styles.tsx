import styled from "styled-components";

interface ContainerProps {
    backgroundUrl?: string
}

export const Container = styled.div<ContainerProps>`
    cursor: pointer;
    padding: 100px 40px;
    color: black;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 700px;

    transition: all .2s ease-in-out;
    background-image: url('${props => props.backgroundUrl}');
    background-size: cover;
    background-position: top center;

    &:hover {
        
    } 

    h2 {
        padding: 30px;
    }
`

export const SummaryContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`