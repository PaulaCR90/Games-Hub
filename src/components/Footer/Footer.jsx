import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <h6>
        Created by PaulaCR for {' '}
        <a href="https://www.thepowermba.com/es//">{`Rock{TheCode}!`}</a>
      </h6>
      <div className='img-container'>
        <a href="https://github.com/PaulaCR90"><img src="./assets/github-logo.png" alt="logo-gitHub" /></a>
        <a href="https://www.linkedin.com/in/paula-alejandra-castro-rodr%C3%ADguez-a671b3208/"><img src="./assets/linkedin-logo.png" alt="logo-Linkedin" /></a>
        <a href="mailto:p.a.castrorodriguez@gmail.com"><img src="./assets/correo-logo.png" alt="logo-Mail" /></a>
      </div>
    </footer>
  )
}

export default Footer;