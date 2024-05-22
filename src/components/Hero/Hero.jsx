import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () =>{
  return(
    <div className="hero">
       <img src={profile_img} alt="" />
       <h1> I'm <span> Pintu Kumar,</span> frontend developer based in India.</h1>
       <p>I am a frontend developer from Bihar.</p>
       <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
       </div>
    </div>
  )
}

export default Hero

