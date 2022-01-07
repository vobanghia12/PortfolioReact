
import {FaReact, FaJava} from 'react-icons/fa';
import {SiJavascript,SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiMongodb} from "react-icons/si";
import Python from "../../asset/icons8-python.svg"
import { DiAngularSimple, DiBootstrap, DiChrome, DiDatabase, DiGithubFull, DiGitBranch, DiMysql, DiNodejsSmall, DiNpm, DiPhotoshop, DiPostgresql} from "react-icons/di";
import { FcAndroidOs } from "react-icons/fc"
import Aos from "aos";
import React, {useEffect} from "react";
import "aos/dist/aos.css"
const Skills = () =>{
    useEffect(() => {
        Aos.init({duration: 2000});
    },[]);
    return(
        <section data-aos="fade-right" className="mt-16 md:mt-20 w-4/5 m-auto" id="Skills">
            <h1 className="text-center font-bold text-4xl tracking-wide">Skills.</h1>
            <div >
                <h2 className="text-center text-2xl font-bold mt-7 text-gray-500 tracking-wider">Languages</h2>
                <ul className="flex justify-center items-center my-6 flex-wrap ">
                    <li><SiJavascript size={50} color="#F0E05D"    style={{background: "black"}}className="icon "/></li>
                    <li><FaJava size={50} className="icon"/></li>
                    <li><img src= {Python} className="icon" alt="Python"/></li>
                    <li><SiTypescript size={50} className="icon" color="#1A73E8"/></li>
                    <li><SiHtml5 size={50} className="icon" color="#EA4335"/></li>
                    <li><SiCss3 size={50} className="icon" color="#2962FF"/></li>
                </ul>
            </div>
            <div>
            <h2 className="text-center text-2xl font-bold mt-7 text-gray-500 tracking-wider">Technologies</h2>
                <ul className="flex justify-center items-center my-6 flex-wrap ">
                    <li><FaReact size={60} color="#7EE8F8" className="icon "/></li>
                    <li><DiAngularSimple size={60} color="#D83252" className="icon"/></li>
                    <li><DiBootstrap size={60} color="#983EF8" className="icon"/></li>
                    <li><DiChrome size={60} className="icon" color="#2278A8"/></li>
                    <li><DiDatabase size={60} className="icon" color="#EA4335"/></li>
                    <li><DiGithubFull size={60} className="icon" color="black"/></li>
                    <li><DiGitBranch size={60} className="icon" color="#2962FF"/></li>
                    <li><DiMysql size={60} className="icon" color="#2278A8"/></li>
                    <li><DiNodejsSmall size={60} className="icon" color="#8CBC26"/></li>
                    <li><DiNpm size={60} className="icon" color="#C84848"/></li>
                    <li><DiPhotoshop size={60} className="icon" color="#2962FF"/></li>
                    <li><DiPostgresql size={60} className="icon" color="#257EB8"/></li>
                    <li><FcAndroidOs size={60} className="icon" color="#8CBC26"/></li>
                    <li><SiTailwindcss size={60} className="icon" color="#5EC8F8"/></li>
                    <li><SiMongodb size={60} className="icon" color="#69AC62"/></li>

                </ul>
            </div>

        </section>
    )
}

export default Skills;