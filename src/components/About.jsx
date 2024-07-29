import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
import { FaEnvelope } from "react-icons/fa";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am Madhusudan Anand, a passionate software developer and problem
            solver. Currently pursuing a B.Tech in Computer Science and
            Engineering at <b>Vellore Institute of Technology</b> , I have honed
            my skills in various programming languages, including 
            <strong> C/C++</strong>,<strong>Java</strong>,{" "}
            <strong>JavaScript</strong> , and <strong>Python</strong>, as well
            as technologies like <strong>React.js</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>MySQL</strong>. With a
            solid foundation in <strong>data structures</strong>,{" "}
            <strong>algorithms</strong>, and{" "}
            <strong>object-oriented programming</strong>, I have developed
            several projects, including a{" "}
            <strong>GitHub account analyzer</strong>, a full-stack{" "}
            <strong>Indian recipe web application</strong>, a{" "}
            <strong>Google Sheets clone</strong>, and a{" "}
            <strong>news aggregation platform</strong>. Additionally, I have
            published research on <strong>Android malware detection</strong>{" "}
            . My extracurricular
            achievements include solving{" "}
            <strong>700+ algorithmic problems</strong> and active involvement in{" "}
            <strong>technical clubs</strong>. I am always eager to learn new
            technologies and contribute to impactful projects.
          </p>
        </article>
      </div>
        <article className="align-element mt-8 flex justify-center" >
          <span className="text-1xl font-medium tracking-wider capitalize mt-4"> I am always excited to work on some awesome projects, message me and let's discuss over coffee</span>
          <a href='mailto:madhusudananand118@gmail.com' target='_blank'>
            <FaEnvelope className='h-8 w-8 text-slate-500 hover:text-black duration-300 align-center' />
          </a>
        </article>
    </section>
  );
};
export default About;
