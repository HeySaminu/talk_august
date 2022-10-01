import styled from "styled-components";


export const StyledHeader = styled.header`
    background: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
    min-height:90px;
    margin: 0 auto 60px;
`

export const Nav = styled.nav`
    display:flex;
    width:100%
    align-items:center;
    justify-content: space-between;
    padding: 20px 0;
    
`

export const NavItems = styled.ul`
display:flex;
list-style:none;
justify-content: space-between;
gap:50px;

  li{
    opacity: 0.4; 
    font-size: 16px;
    font-family: "Larsseit Medium", Sans-serif;
    font-weight: 500;
    line-height: 30px;

    &:hover{
        opacity:1;
    }
  }
`

export const Logo = styled.img`
    width:80px;
    max-width:100%;
`