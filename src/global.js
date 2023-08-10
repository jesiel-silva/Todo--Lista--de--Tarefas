import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  :root{
    --color-white: #f5f5f5;
    --color-black: #464646;
    --color-black2: #4a4f55;
    --color-red: #bf4f74;
    --color-green: #3cb371;
    --color-green2: #17a2b8;
    --color-blue: #4169e1;
    --color-orange: #ff8c00;
    --color-gray1: #e5e6f0;
  }

  html, body {
    font-size: 62.5%;
    font-family: Arial, Helvetica, sans-serif;

    color: var(--color-black);
    background-color: var(--color-gray1);

    padding: 3rem 0.5rem;
  }
`;