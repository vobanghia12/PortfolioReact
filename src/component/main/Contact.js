import React, {useEffect} from "react";
import "aos/dist/aos.css"
import Aos from "aos";
const Contact = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    },[]);
    return(
        <section data-aos="fade-up" id="Contact" className="mt-24 flex flex-col items-center justify-center">
            <h1 className="text-center font-bold text-4xl">Contact.</h1>
            <p className="text-gray-500 text-lg text-center w-2/3 mt-10 lg:contact-width">The fastest way to get in touch with me is by sending me a message on <a style ={{fontSize: "1.2rem"}}className="font-semibold text-black button_slide slide_right"href="https://www.linkedin.com/in/nghia-vo-449456207/" rel="noreferrer" target="_blank">Linkdien</a>. You can also shoot me an email if you prefer, whether it is discussing an opportunity or asking question, I will try my best to back to you</p>
            <a href="mailto:vobanghia12@gmail.com" className=" border-2 border-secondary px-7 py-3 text-xl mt-14 drop-shadow-lg font-semibold text-secondary cursor-pointer hover:bg-secondary hover:text-white mb-20">Contact</a>
        </section>
    )
}
export default Contact