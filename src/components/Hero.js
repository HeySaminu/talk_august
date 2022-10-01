
import { Hero } from './styles/Hero.styled'
import { HeroImage } from './styles/Hero.styled'
import { HeroImageCard } from './styles/Hero.styled'
import { Button } from './styles/Hero.styled'

export default function HeroSection(){

    return (
    
<>
<Hero>
<div>
<h2>Sexual healthcare the way you need it</h2>
<p>Get personalized access to sexual healthcare whenever and however you need it. Virtual visits, medications, lab tests and other products from the comfort of your home</p>
<Button>Start free evaluation</Button>
</div>  
<div>
<HeroImage src='./images/hero-section-img.jpg' alt=''/>     
<HeroImageCard src='./images/Dami-Jola-Card.svg' alt=''/>
</div>
</Hero>
</>

    )
}