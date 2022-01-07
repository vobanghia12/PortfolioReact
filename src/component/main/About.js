import Aos from "aos";
import React, {useEffect} from "react";
import "aos/dist/aos.css"
import profile from "../../asset/my-picture.jpeg"
const About = () =>{
  
    useEffect(() => {
        Aos.init({duration: 2000});
    },[]);
    return(
        <section data-aos="fade-up" className=" bg-gradient-to-r from-primary to-secondary text-white py-16 px-8 md:px-10 lg:px-20 md:clip" id="About"> 
            <h1 className="text-center font-bold mb-8 text-4xl">About Me.</h1>
            <div className="md:flex ">
                <div data-aos="fade-right" className="flex justify-center items-center mb-8 md:flex-1 md:justify-center md:items-center">
                    <img src={profile} alt="Super handsome boy" className="h-52 w-52 rounded-full drop-shadow-2xl md:w-80 md:h-80"></img>
                </div>
                <div data-aos="fade-up" className="md:flex-1 lg:mr-10 xl:mr-20 text-lg font-medium leading-8 md:mb-24">
                    <p className="text-center px-4 md:text-left mt-4">I'm a student at University of South Florida and pursuing Bachelor's Degree in Computer Science. I love crafting things for website and mobile application. 
                    Besides attending college, I'm also working on exiting and interesting projects by skills I learn from online and school.</p>
                    <p className="text-center px-4 md:text-left mt-4">As a junior developer, I'm willing to learn somethings new in problems-solving as well as software developments.  </p>
                    <p className="text-center px-4 md:text-left mt-4">If I'm not doing anything coding-related, I enjoy going to the gym and exploring amazing places around my town.</p>
                </div>
            </div>
           
        </section>
    )
}

export default About;