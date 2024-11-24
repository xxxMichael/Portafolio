
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  MysqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  PHPIcon,
  pawsitivePrototype,
  memoryGame,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  MysqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hey there thanks for being here , hope u like my portfolio :)",

		"My name is Michael Chavez, I'm 20 and a fourth-semester software engineering student based in Tungurahua, Ecuador. I have a strong passion for web development, data structures, front-end design, and technologies like Three.js.",
    "Outside of my regular activities, I enjoy reading, combat sports, video games, movies, and indulging in delicious chinese cuisine.",
    "I'm continuously thrilled to collaborate with my classmates and teams to develop meaningful projects. Your visit to my portfolio is deeply appreciated!",
    "You can download my resume here."
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Ay",
    description: '',
    image: memoryGame,
    source_code_link: 'x',
    demo_link: 'x',
  },
  {
    name: 'b',
    description: '',
    image: "",
    source_code_link: '',
    demo_link: '',
  },
  {
    name: 'c',
    description: '',
    image: "",
    source_code_link: '',
    demo_link: '',
  },
  {
    name: 'd',
    description: '',
    image: "",
    source_code_link: '',
    demo_link: '',
  },
  {
    name: 'e',
    description: '',
    image: "",
    source_code_link: '',
    demo_link: '',
  },
  {
    name: '',
    description: '',
    image: "",
    source_code_link: '',
    demo_link: '',
  },
  {
    name: '',
    description: '',
    image: "",
    source_code_link: '',
    demo_link: '',
  },
  {
    name: '',
    description: '',
    image: "",
    source_code_link: '',
    demo_link: '',
  }

];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      '"I have strong experience in HTML, enabling me to design responsive, accessible web pages and collaborate effectively with front-end frameworks."',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    '"I am skilled in CSS, with experience in crafting responsive designs, styling user interfaces, and enhancing web aesthetics through animations and modern techniques."',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    icon: awsIcon,
    description:
      '"I have experience with AWS, including EC2, RDS, S3 buckets, and AWS Certificates, enabling me to deploy and manage secure cloud solutions."',
  },
    {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  
  {
    id: 'vite',
    title: 'Vite',
    icon: viteIcon,
    description:
      'I have gained considerable experience working with Vite , leveraging its capabilities to build React websites.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      '"I have basic experience with Python, using it to create solutions and integrate functionality into web applications."',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'php',
    title: 'PHP',
    icon: PHPIcon,
    description:
      'I have extensive experience with PHP, using it to develop backends for web applications and create dynamic, data-driven websites.',
  },
  {
    id: 'mysql',
    title: 'MYSQL',
    icon: MysqlIcon,
    description:
      'I have extensive experience with MySQL, having used it in the majority of my projects for database management, data retrieval, and optimization.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
