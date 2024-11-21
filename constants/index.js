
import project1 from "../constants/Myntra.jpg";
import project2 from "../constants/chatApplication.jpg";
import project3 from "../constants/stripe.png";
import project4 from "../constants/bot.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Backend Developer",
    company: "Fourty60 Infotech Pvt Ltd. ",
    description: ` Developing and maintaining web applications using JavaScript, Express.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. collaborating with team for   upcoming  requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Backend Developer",
    company: "Mobcast Pvt Ltd.",
    description: `Designed and developed Backend for web applications using Node.js and Sql. Worked closely with backend developers.`,
    technologies: ["Js", "NodeJs", "ExpressJS", "mySQL"],
  },
];

export const PROJECTS = [
 
  {
    title: "Myntra Backend Clone",
    image: project1,
    description:
      "A backend apis for ecommerce, with features such as cart,roles,user managment,products,sort and pagination and pusher for notification.",
    technologies: ["Js","Nodejs", "Expressjs", "SQL"],
  },
  {
    title: "Chat Application",
    image: project2,
    description:
      "Mern chat application with integration of websocket,can have chats with each other and group     creation ,group conversation.",
    technologies: ["HTML", "CSS", "Js","React","NodeJs","ExpressJS", "MongoDB"],
  },
  {
    title: "Stripe Integration",
    image: project3,
    description:
      "A platform for payment through card,upi,etc.. .",
    technologies: ["HTML", "CSS", "Ejs", "NodeJs","ExpressJs", "MySQL"],
  },
  {
    title: "FindNearBy Bot",
    image: project4,
    description:
      "A telegram bot which finds near by places with help of foursquare apis by exacting  user  longitude and latitude.",
    technologies: [ "Node.js","ExpressJs","MySql"],
  },
];

export const CONTACT = {
  address: " Byculla west, Mumbai, 400011 ",
  phoneNo: "+91 8104319200 ",
  email: "shaqeebsk1234@gmail.com",
};