import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

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
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'FullStack Software Engineer',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jan 2022 - March 2024',
  },
  {
    title: ' Code Reviewer',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'April 2023 - March 2024',
  },
  {
    title: 'Software Engineer',
    company_name: 'ZuriTeam',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Software developer intern',
    company_name: 'Quanteq Technology Services',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan  2016 - Aug 2016',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Pipsgod Academy',
    description: 'An online learning platform for users interested in learning FOREX trading.This website is built with comprehensive courses from the basics of forex market to advanced trading strategies.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/vickymarz/pips-god',
    demo: 'https://pipsgod.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'SevenWeek Planner',
    description:
      'A webapp for showing a users availability in time over a period of seven weeks which can be shared with friends to plan hangouts.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/usorfaitheloho/SevenWeek-Planner',
    demo: 'https://unfairadvantage.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'Always Care',
    description: 'Alwayscare doctors appointment app is a software application that is especially meant to help patients manage and schedule appointments with the doctors or opt for a real-time chat.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/vickymarz/doctors-appointment-frontend',
    demo: 'https://doctors-appointment-app-2k1t.onrender.com/',
  },
  {
    id: 'project-4',
    name: 'Meta BNB',
    description: `A website that provides access to luxury and affordable houses in the metaverse, turning your imagination to reality at your comfort zone Search for location on the metaverse`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/usorfaitheloho/metabnb',
    demo: 'https://metabnb-site.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'HackHerThon',
    description:
      'A website for a HackHerTon event for female Software developers , to be held in Nigeria.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/usorfaitheloho/HackHerThon',
    demo: 'https://hackherthon.netlify.app/',
  },
];

export { services, technologies, experiences, projects };
