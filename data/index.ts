import { github, linkedin, twitter, instagram } from "../src/assets";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "BujjiAi-Article Summarizer",
    des: "Simplify your reading with Summize , an open-source article Summarizer that transforms lengthy articles into clear and concise summaries.",
    img: "/p1.png",
    iconLists: ["../public/re.svg", "../public/cloud.svg", "../public/tail.svg",],
    link: "https://github.com/PREMSAITEJA/ArticleSummarize",
    liveSite:"https://bujjigpt4.netlify.app/",
  },
  {
    id: 2,
    title: "Emotional Support ChatBot 🤖",
    des: "This chatbot is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.",
    img: "/p2.png",
    iconLists: [ "../public/stream.svg","vs-code.svg","/python.svg"],
    link: "https://github.com/PREMSAITEJA/Emotional-Support-ChatBot/tree/main",
    liveSite:"https://discuss.streamlit.io/t/serene-talk-the-emotional-support-chatbot/57564",
  },
  {
    id: 3,
    title: "Design Sphere",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/app.svg",],
    link: "https://github.com/PREMSAITEJA/StartUP",
    liveSite:"https://designspheree.netlify.app/sign-in"
  },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    icon: github, // Now using imported asset instead of string path
    link: "https://github.com/PREMSAITEJA",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/thulva-pram-sai-teja-51b0ab244/",
  },
  {
    id: 3,
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/TejaSai30024",
  },
  {
    id: 4,
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/prem_sai_tej_/",
  },
];
