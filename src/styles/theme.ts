import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
  fontColor: '#121212',
  inputColor: 'transparent',
  themeColor: '#004550',
  switchColor: '#f50057'
};

export const darkTheme = {
  body: '#121212',
  fontColor: '#fff',
  inputColor: '#fff',
  themeColor: '#BB86FC',
  switchColor: '#f50057'
};


export const GlobalStyles = createGlobalStyle`
  html{
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
  body {
    background: ${(props:Theme) => props.theme.body};
    color: ${( props:Theme) => props.theme.fontColor};
    --themeColor: ${( props:Theme) => props.theme.themeColor};
    --switchColor: ${(props: Theme) => props.theme.switchColor};
  }
  h1,h2,h3, a {
	  color: ${( props:Theme) => props.theme.themeColor};
    margin-top: 0;
  }
  input::placeholder {
    color: ${( props:Theme) => props.theme.inputColor};
  }
  label {
    background: white;
  }
  `

interface Theme {
  theme: {
    body: string;
    fontColor: string;
    themeColor: string;
    inputColor: string;
    switchColor: string;
  }
}
