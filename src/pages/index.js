import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import wave from '../components/Wave';



const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Hello, my name is Milton!</h1>
      <p>I'm a Designer that focuses on User Experience & User Interface. To keep myself inspired I Capture Moments of Artists & Live music.</p>
      <Link to="/page-2/">Twitter</Link>
      <div className="Logos">
        <img src={require('../images/logo-sketch.png')}
        width="50" />
      </div>
      <Wave />
      </div>
    </div>
    <div className="Cards">
      <h3>UX Projects</h3>
      <div className="CardGroup">
        <Card title="Titcket Surf"
        text="View Case Study" 
        image='https://cl.ly/3B0k3t1q450Q/iPhone%20X_MockUp.png'
        />
        <Card title="UnderDog"
        text="View Case Study" 
        image='https://cl.ly/3B0k3t1q450Q/iPhone%20X_MockUp.png'
        />
        <Card title="Blinds USA"
        text="View Case Study" 
        image='https://cl.ly/3B0k3t1q450Q/iPhone%20X_MockUp.png'
        />
     </div>
    </div>
    <Section 
      image='https://cl.ly/1h1U0q381F1T/wallpaper2.jpg'
      logo='https://cl.ly/43734222afed/PotentialLogo1.png'
      title="About Me"
      text="You might catch me cruising on my board, listening to music, or writing on walls. I give credit to Skateboarding, Music, and Graffiti for inspiring me. I am Passionate for several Design fields. I really enjoy the idea of Creating new things and Improving the User Experience of today’s world through Innovation and Design thinking. 

      BLURRD Develop & Design is a Studio based in Las Vegas. Focusing on Design & Mobile/Web Development. 
      
      I have a year and a half experience in UI/UX Design, previously for Blinds USA. If I am not working with a Product Owner I stay brushed up on my skills by working on Personal projects, Mobile/Web Redesigns, & UI Daily Challenges. 

      As a Designer and Junior Developer, I bring together Structure and Function to create something that looks great and performs better. 

      Alongside my clients, I uncover problems and solve them. 
      
      Follow me & stay up to date on what I'm up to "

    />
  </div>
)

export default IndexPage
