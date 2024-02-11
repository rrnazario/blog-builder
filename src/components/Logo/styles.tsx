import styled from "styled-components";

interface ContainerProps {
  $spin?: boolean
}
export const Container = styled.div<ContainerProps>`
    cursor:pointer;
    img {
        transition: transform .7s ease-in-out;
        width: 80px;
      }
      img:hover {
        ${props => props.$spin && 'transform: rotate(360deg);'}
      }
`