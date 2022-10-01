import { ThemeProvider } from "styled-components";
import Header from './components/Header'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import './Style.css';
import HeroSection from "./components/Hero";

const theme = {
  colors:{
    header:'',
    body: '',
    footer:''
  }
}

function App() {
  return (
  <ThemeProvider theme = {theme}>
  <>
  <GlobalStyles />
    <Header />
    <Container>
     
    </Container>

    <HeroSection />
    </>

  </ThemeProvider>
   
  );
}

export default App;
