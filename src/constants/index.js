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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "AI-Powered Web Solutions",
    icon: mobile,
  },
  {
    title: "Mobile App Development",
    icon: backend,
  },
  {
    title: "Technical Content Creation",
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
    title: "Real-Time AI Sales Intelligence and Sentiment-Driven Deal Negotiation Assistant",
    company_name: "Infosys SpringBoard",
    icon: starbucks,
    iconBg: "#383E56",
    certificateLink:"https://drive.google.com/file/d/1R0lIxq19ZpB6lIAIz84TXx-7xaP5yOXg/view?usp=sharing",
    date: "26th November 2024 - 31st January 2025",
    points: [
      "Contributed to developing an AI-powered tool for real-time sentiment analysis to optimize deal negotiations.",
      "Implemented machine learning algorithms and natural language processing (NLP) techniques to assess and predict negotiation outcomes based on sentiment analysis.",
      "Designed and implemented machine learning models and natural language processing algorithms to enhance sales strategy.",
      "Collaborated with an Agile team to deliver a scalable and data-driven sales intelligence solution.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Full stack Developer",
    company_name: "Bird Code Community",
    icon: meta,
    iconBg: "#E6DEDD",
    certificateLink:"https://media.licdn.com/dms/image/v2/D562DAQGVHwiQw9zZPQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1708853596827?e=1747292400&v=beta&t=VbtWZUrh-iwpuXr6kuVNm2Y7hK_HuOlvHPog0lOKHF4",
    date: "Febrauary 2024 - June 2024",
    points: [
      "Developed an innovative project called “Air Canvas” using Python, OpenCV, and NumPy. The project allows users to draw or write in the air, with the following features.",
      "Real-time hand tracking and gesture recognition using OpenCV.",
      "Utilized NumPy for efficient numerical operations and data handling.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    quote:
      "This 30-hour coding marathon was a platform for innovation, challenging us to unlock the true potential of technology. It was an exhilarating experience to compete and collaborate with talented peers, as we developed proof-of-concepts for transformative solutions.",
    name: "#30 Hacks Hackathon by GlobalLogic",
    designation: "Delhi , India",
    src: "https://res.cloudinary.com/dybjklvdl/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1747399365/1710864914997_glxu2f.jpg",
  },
  {
    quote:
      "Participating in this hackathon was an eye-opening experience for me. Not only did I get to work alongside some of the most talented individuals in the industry, but I also learned so much about the world of technology.",
    name: "Math-Hack",
    designation: "T-Hub, Hyderabad, India",
    src: "https://res.cloudinary.com/dybjklvdl/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1747399521/1726412557854_faxgeo.jpg",
  },
  {
    quote:
      "This experience was packed with invaluable insights from industry experts and hands-on learning. I had the opportunity to work on real-world projects, which not only enhanced my technical skills but also provided a platform to network with like-minded individuals.",
    name: "IDE BootCamp by MoE",
    designation: "Vizag, Andhra Pradesh, India",
    src: "https://res.cloudinary.com/dybjklvdl/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1747399580/1728033074535_jmnq5u.jpg",
  },
  
];

const projects = [
  {
    name: " Article Summarizer with GPT4.",
    description:
      "The AI Article Summarizer is a web application that allows users to summarize any article by simply pasting the article's link into the webpage. This tool leverages advanced machine learning techniques and the OpenAI API to generate concise summaries, making it easier for users to digest large amounts of information quickly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/PREMSAITEJA/ArticleSummarize.git",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
