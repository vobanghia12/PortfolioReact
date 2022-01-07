import p1 from "../../asset/project1.png";
import p2 from "../../asset/project2.png";
import p3 from "../../asset/project3.png";
import p4 from "../../asset/project4.png";
import Aos from "aos";
import React, {useEffect} from "react";
import "aos/dist/aos.css"
import video1 from "../../asset/PortfolioRecord.mp4"
import video2 from "../../asset/RestaurantProject.mp4"

const Projects = () =>{
  useEffect(() => {
    Aos.init({duration: 2000});
},[]);
    return(
        <section data-aos ="fade-right" className="mt-20" id="Projects">
        <div class="px-32">
          <h1 class="text-center font-bold text-4xl">Projects.</h1>
          <div class="project-grid">
          <div class="project-card">
                
              <video autoPlay loop muted aria-label="Showcase my Portfolio Website" src={video1} alt ="Project 5" class="img-setting"/> 
            
              <div class="post-preview">
                  <h6 class="post-title">My Portfolio Website</h6>
                  <p class="post-intro">My portfolio website is built from sratch with React and Tailwind</p>
                  <a class= "post-button" href="https://nghiavo.netlify.app" target="_blank">Live site</a>
                  <a class= "post-button" href="https://github.com/vobanghia12/List-restaurants" target= "_blank" rel="noreferrer">Source code</a>
              </div>
            </div>
          <div class="project-card">
          <video autoPlay loop muted aria-label="Showcase my Portfolio Website" src={video2} alt ="Project 5" class="img-setting"/> 
         
         
             <div class="post-preview">
                 <h6 class="post-title">Favorite Restaurants</h6>
                 <p class="post-intro">The web app let user type and recomment their favorite restaurant</p>
                 <a class= "post-button" href="https://github.com/vobanghia12/List-restaurants" target= "_blank" rel="noreferrer">Source code</a>
             </div>
           </div>
            <div class="project-card">
              
                <img src={p1} alt ="Project 1" class="img-setting"/> 
              
              <div class="post-preview">
                <h6 class="post-title">Tic-tac-toe</h6>
                <p class="post-intro">The first player get three in a row first that will win the game</p>
                <a class= "post-button" href="https://github.com/vobanghia12/Tic-tac-toe" target= "_blank" rel="noreferrer">Source code</a>
              </div>
            </div>

              <div class="project-card">
              
                  <img src={p2} alt ="Project 2" class="img-setting"/> 
                
                  <div class="post-preview">
                    <h6 class="post-title">Nail Salon Landing Page</h6>
                    <p class="post-intro">A landing page to promote a local nail salon in my town</p>
                    <a class= "post-button" href="https://github.com/vobanghia12/nail-salon-header" rel="noreferrer" target= "_blank">Source code</a>
                  </div>
              </div>
              <div class="project-card">
            
                  <img src={p3} alt ="Project 3" class="img-setting"/> 
                
                <div class="post-preview">
                  <h6 class="post-title">Mapty - Exercise Spying</h6>
                  <p class="post-intro">A web app tracks and shows details of your exercise</p>
                  <a class= "post-button" href="https://github.com/vobanghia12/Exercise-Map" target= "_blank" rel="noreferrer">Source code</a>
                </div>
              </div>
             
              
            </div>
        </div>
        
      </section>
    )
}
export default Projects