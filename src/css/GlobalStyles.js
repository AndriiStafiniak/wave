import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    height: 100vh;
    overflow: auto;
    scroll-behavior: smooth;
  }

  *, ::after, ::before{
    margin: 0;
    box-sizing: inherit;
  }

  body{
   font-family: Outfit;
  }

  #root{
    height: 100%;
    overflow: hidden;
    display: grid;
    grid-template-rows: auto 1fr;
  }
  ::-webkit-scrollbar {
  width: 10px;
  }

  ::-webkit-scrollbar-track {
  background: transparent;
  }

  ::-webkit-scrollbar-thumb {
  background: #555;
  }

  ::-webkit-scrollbar-thumb:hover {
  background: #888;
  }  
  `;
