import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`



* {
    box-sizing:border-box;
}

body {
    background-image: url("./images/background-lines.svg");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 1240px auto;
    color: #000000;
    font-family: "Larsseit";
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;

}

h1,h2,h3{
    font-family: "Recoleta", Sans-serif;
    }

`

export default GlobalStyles