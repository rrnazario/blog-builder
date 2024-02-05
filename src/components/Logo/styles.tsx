import styled from "styled-components";

export const Container = styled.div`
    cursor:pointer;
    img {
        transition: transform .7s ease-in-out;
        width: 80px;
      }
      img:hover {
        transform: rotate(360deg);
      }
`