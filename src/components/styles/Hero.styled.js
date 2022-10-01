import styled from "styled-components";

export const Hero = styled.div`
    display: flex;
    width:1440px;
    max-width:100%;
    padding: 0 100px;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    gap:100px;
    & > div,
    & > ul{
        flex: 1;    
    }

    & div:has(img){
        flex:1;
        margin-left:100px;
        align-self: end;
        display: flex;
        justify-content: flex-end;
    }
    & h2{
        margin:0;
        margin-bottom:15px;
        font-weight: 700;
        font-size: 70px;
        line-height: 83px;
    }

    & p{
        margin:0;
        margin-bottom:60px;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
    }
`

export const HeroImage = styled.img `
       
        width: 594px;
        max-width: 100%;
        height: 69.3vh;
        object-fit: contain;
        border-radius:5px;
`

export const HeroImageCard = styled.img `
        position: absolute;
        left: 840px;
        top: 570px;
`

export const Button = styled.button`
pointer:cursor;
font-weight: 500;
font-size: 20px;
line-height: 30px;
padding: 25px 30px;
background: #FEB139;
color:#000000;
border-radius: 10px;
border:0;


`