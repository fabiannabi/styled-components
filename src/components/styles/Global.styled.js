import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
  * {
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  body {
    background-color: ${({theme})=>theme.colors.body};
    color: #2b2d42;
    font-size: 1.2rem;
    margin: 0;
  }

`
