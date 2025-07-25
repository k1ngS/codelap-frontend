import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: #ddd;
    color: #000;
    line-height: 1.5;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
  }

  #root {
    min-height: 100vh;
  }
`

// Colors for theme
export const theme = {
  colors: {
    primary: '#7695ec',
    background: '#ddd',
    white: '#fff',
    black: '#000',
    gray: '#999',
    lightGray: '#ccc',
    red: '#ff5151'
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px'
  }
}