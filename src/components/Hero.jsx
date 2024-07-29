import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24'>
      <div className='align-element  grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-6xl font-bold tracking-wider'>I'm Madhusudan</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Software Engineer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into code 🧑‍💻
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/madhuSudan27'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/madhusudan-anand-93455a1b5/'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://x.com/ms_Anand1' >
              <FaXTwitter className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='mailto:madhusudananand118@gmail.com' target='_blank'>
              <FaEnvelope className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};
export default Hero;
