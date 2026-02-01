import heroPic from "../assets/hero.png";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Hero(){
    const config = {
        subtitle: "I'm a Full-Stack Developer",
        social: {
            linkedin: 'https://in.linkedin.com/in/hamsiga-srikanthaverl-12534439b'
        }
    }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md: w-1/2 '>
            <h1 className='text-white text-6xl font-hero-font'>Hi, <br/>I'm <span className='text-black'> Hamsiga Srikanthaverl </span>
                <p className='text-2xl py-3'>{config.subtitle}</p>
            </h1>

            <div className='flex py-6'>
                <a href={config.social.linkedin} className='px-5 hover:text-white'> < AiOutlineLinkedin size={40} /> </a>
            </div>
        </div>

        <img src={heroPic} alt="Hero section graphic" />


    </section>
}