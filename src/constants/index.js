import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: ".Net Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Intern",
    company_name: "RideSoftech Solutions LLP",
    icon: tesla,
    iconBg: "#fff",
    date: "February 2019 - January 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Partnered with senior developers to successfully migrate a banking application to a React.js and Node.js framework, enhancing system functionality and performance",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Boosted application performance, integrated new features, and facilitated a seamless transition to a modern tech stack",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Aretove Technologies Pvt. Ltd.",
    icon: starbucks,
    iconBg: "#fff",
    date: "June 2020 - September 2021",
    points: [
      "Redesigned the customer interface on Shopify by developing intuitive user interfaces for key e-commerce components such as home, product listings, descriptions, account, and cart, which significantly enhanced user engagement and the shopping experience.",
      "Upgraded the website by integrating advanced features and performance enhancements using AWS, while ensuring compliance with ADA standards to broaden market accessibility.",
      "Demonstrated expertise in leveraging .NET frameworks to architect and develop scalable applications, continually enhancing skills through the adoption of industry trends and best practices in web development.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Aretove Technologies Pvt. Ltd.",
    icon: starbucks,
    iconBg: "#fff",
    date: "September 2021 - August 2023",
    points: [
      "Optimized the internal application for a restaurant chain, achieving a 30% improvement in website performance that significantly reduced API response times and streamlined the user experience.",
      "Spearheaded software development projects for e-commerce clients, enhancing scalability and performance, while ensuring adherence to best practices and leveraging AWS to boost efficiency and robustness.",
      "Collaborated effectively with cross-functional teams to identify, troubleshoot, and problem-solve complex technical challenges during software development and implementation.",
      "Developed a dynamic application using AngularJS, enabling over 10 marketing agencies to create over 100+ advertisements from templates, enhancing productivity and creativity.",
      "Integrated C# APIs to support real-time content editing and previews, improving user engagement and efficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "A dynamic digital space designed to showcase my work and projects in an engaging and interactive way. Built using a combination of ThreeJS, ReactJS, and EmailJS, this website offers visitors a unique and immersive experience while exploring my skills and achievements",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/adishparekhNE",
  },
];

export { services, technologies, experiences, testimonials, projects };
