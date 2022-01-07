import hero from "../../asset/hero-img.svg";
import Typical from 'react-typical';
import Aos from "aos";
import React, {useEffect} from "react";
import "aos/dist/aos.css"
import resume from "../../asset/VoResume.pdf"

const Hero = React.memo(() => {
    useEffect(() => {
        Aos.init({duration: 2000});
    },[]);
    
    return (
        <div className="flex justify-center items-center flex-col md:flex-row min-h-85vh mt-40 w-full px-8 mb-50">
            <div className="flex-1 p-5 lg:mb-60 md:ml-14 ">
                <h1 className="text-4xl font-bold text-primary lg:text-5xl text-left max-w-full lg:mt-20">Hi, I'm Nghia.</h1>
                <h2 data-aos="fade-up" className="font-medium text-xl mt-2 md:mt-4 md:text-2xl">
                    { <Typical
                        loop = {Infinity}
                        steps = {
                            ['Full-stack Developer', 
                            1000,
                            'Front-end Developer', 
                            1000,
                            'Back-end Developer', 
                            1000,
                            'Student', 
                            1000,
                            'Aspiring Software Engineer',
                            1000,
                            'React/React Native Dev',
                            1000,]
                        }
                    /> }
                </h2>
                <p data-aos="fade-up" className="text-gray-500 mt-4 lg:w-10/12 md:text-lg" >I am a student and aspiring software engineer based in US who is passionate to construct and creat end-user application to meet user need.</p>
                <div data-aos="fade-up" className= "mt-8">
                    <a href= "mailto:vobanghia12@gmail.com" className="btn bg-primary text-white hover:bg-blue-800">Get in touch
                    </a>
                    <a href ={resume} target ="_blank" rel="noreferrer" className = "relative btn border-secondary ml-5 text-primary hover:bg-blue-100 hover:border-0">
                    Resume
                    <span class="inline-flex h-3 w-3 absolute -right-2 -top-2">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-secondary opacity-75"></span>
                        <span className="relative rounded-full inline-flex h-3 w-3 bg-secondary"></span>
                   </span>
                   </a>
                    
                </div>
            </div>
            <div data-aos="fade-up" className="flex-1 p-5">
                <img src= {hero} className ="max-w-full" alt="Illustrator"/>
            </div>
        </div>
    
    )
})

export default Hero; 