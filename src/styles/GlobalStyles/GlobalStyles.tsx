import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
      margin: 0;
      padding: 0;
      outline: none;
      resize: none;
  }
  a {
      text-decoration: none;
      &:hover {
          text-decoration: none;
      }
  }

  ul, li {
      list-style: none;
  }

  html {
      font-size: 16px;
  }
  
  html, body {
      scroll-behavior: smooth;
  }
  
  body {
    width: 100%;
    background: white;
    color:black;
    margin: 0 auto;
  }
  
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`