import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import Header from "./components/Header";

const theme = {
  colors: {
    header: '#bbd0ff',
    body: '#f2f7ff'
  },
  mobile: {
    small: '768px'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles/>
        <Header/>
        <Container align="center">
          <p>Coming Soon</p>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
