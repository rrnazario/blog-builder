import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

:root {
    --background: white;
    --text-primary: black;
    --text-secondary: #f78da7;
    --text-tertiary: #4f6ee4;
    --accent: purple;
  }
  [data-theme='dark'] {
    --background: black;
    --text-primary: white;
    --text-secondary: grey;
    --accent: darkred;
  }

  a, a:hover, a:focus, a:active {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: inherit;
} 
`

export default GlobalStyle;