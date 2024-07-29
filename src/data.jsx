import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaJava,FaGitAlt,FaNode , FaPython} from 'react-icons/fa';
import { DiMysql } from "react-icons/di";
import { SiMongodb ,SiExpress, SiE } from "react-icons/si";
import gitmineImage  from './assets/gitmine.png'
import excelImage from './assets/Excel.png'
import housePriceImage from "./assets/house_price_p.png";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <FaJava className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Mysql',
    icon: <DiMysql className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <FaGitAlt className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node',
    icon: <FaNode className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Express',
    icon: <SiExpress className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: gitmineImage,
    url: 'https://msanand-githubmine.netlify.app/login',
    github: 'https://github.com/madhuSudan27/githubMine',
    title: 'GitMine',
    text: "GitMine is an innovative GitHub analyzer designed to provide a comprehensive overview of a user's GitHub activity.  such as the total number of repositories, the programming languages utilized, and the number of commits made and many more.",
  },
  {
    id: nanoid(),
    img: excelImage,
    url: 'https://github.com/madhuSudan27/excel_clone',
    github: 'https://github.com/madhuSudan27/excel_clone',
    title: 'Google Sheet clone',
    text: "Google Sheets Clone is a web application built using JavaScript, HTML, and CSS that replicates core functionalities of a spreadsheet tool. This project includes features such as formula evaluation, support for multiple sheets and many more",
  },
  {
    id: nanoid(),
    img: housePriceImage,
    url: 'https://github.com/madhuSudan27/house-price-prediction',
    github: 'https://github.com/madhuSudan27/house-price-prediction',
    title: 'Bengaluru House price predictor',
    text: "'House' Price Prediction is a data-driven project that leverages machine learning algorithms to accurately forecast the prices of residential properties. Utilizing a robust dataset, the model analyzes various factors such as location, size, amenities, and historical price trends to generate reliable price estimates.",
  },
];
