import { Container } from "./styles/Container.styled"
import { StyledHeader, Nav, NavItems, Logo } from "./styles/Header.styled"
import GlobalStyles from '../components/styles/Global'
export default function Header(){

    return (
    
        <StyledHeader>
             <GlobalStyles />
       <Container>
      
           
           <Nav>
               <a href="/"><Logo src='./images/logo.svg' alt=''/></a>
               <NavItems>
               <li>Home</li>
               <li>How it works</li>
               <li>Why us</li>
                <li>Pricing</li>
                <li>What we treat</li>
               </NavItems>
           </Nav>
           </Container>
       </StyledHeader>
        
    )
}