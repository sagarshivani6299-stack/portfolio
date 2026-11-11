export const portfolio = {
  name: "Shivani Sagar",
  role: "Frontend Developer",
  tagline: "I build thoughtful digital experiences with code, curiosity and a little creativity.",
  location: "India",
  email: "Sagars h ivani6299@gmail.com".replaceAll(" ", ""),
  phone: "6299631542",
  linkedin: "https://www.linkedin.com/in/shivani-sagar-198246324",
  github: "https://github.com/",
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Patna Women's College",
    period: "2023 – 2026",
    note: "BCA graduate"
  },
  profile: "I'm Shivani Sagar, a frontend developer and BCA graduate who enjoys turning ideas into clean, responsive and interactive web experiences. I have built projects ranging from API-powered React applications to e-commerce platforms and a Dockerized real-time collaboration app. I care about usable interfaces, maintainable code and learning how the web works under the hood.",

experience: [
  {
    company: "Envigo Marketing Pvt. Ltd.",
    role: "Frontend Development Intern",
    period: "13 July 2026 – 10 January 2027",
    description:
      "Worked on frontend development tasks, strengthened React and JavaScript fundamentals, and gained practical experience through guided learning and real-world project work.",

    points: [
      "Practised building responsive interfaces and reusable React components.",
      "Worked with modern frontend tools and application workflows.",
      "Explored Docker-based deployment and real-time collaboration concepts through project work.",
    ],
  },

  {
    company: "InternNexuses TechHub, Patna",
    role: "Web Development Internship",
    period: "Dates to confirm",
    description:
      "Resume-listed experience involving a MERN-stack attendance monitoring system and a restaurant table-booking application.",

    points: [
      "Worked on an attendance monitoring system with attendance tracking and notifications.",
      "Built a restaurant table-booking interface with date and time-based booking functionality.",
      "Used HTML, CSS, JavaScript, React, Node.js, Express.js and MongoDB in project work.",
    ],
  },
],

  skills: [
    { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "React Router", "Tailwind CSS", "Responsive Design"] },
    { title: "React & Data", items: ["Redux Toolkit", "Context API", "RTK Query", "TanStack Query", "Axios", "REST APIs", "Fetch API"] },
    { title: "Backend & Real-time", items: ["Node.js", "Express.js", "Socket.IO", "Y-Socket.IO", "MongoDB"] },
    { title: "Tools & Delivery", items: ["Docker", "Git", "GitHub", "Vercel", "Netlify", "Render", "JSON Server"] },
    { title: "Performance", items: ["Web Core Vitals", "Lighthouse", "Intersection Observer", "Pagination", "Infinite Scrolling"] }
  ],
  exploring: ["TypeScript", "Next.js", "Three.js", "React Three Fiber", "GSAP", "GSAP ScrollTrigger", "Lenis", "3D web animation"],
  certifications: ["MERN Stack", "Agentic AI", "Web Designing", "IoT", "Cybersecurity and Networking Analysis"]
};

export const projects = [
  {
    number: "01",
    name: "Movie App — TMDB",
    category: "API / React",
    description: "A movie discovery application that fetches movie data from the TMDB REST API and presents it through a React interface.",
    stack: ["React", "JavaScript", "REST API", "Fetch API"],
    url: "",
    featured: false
  },
  {
    number: "02",
    name: "Movie Search & Details",
    category: "API / React",
    description: "Search for movies and explore detailed movie information using the OMDb API, with shared state and client-side routing.",
    stack: ["React", "Context API", "React Router", "OMDb API"],
    url: "https://imaginative-flan-b52173.netlify.app/",
    featured: false
  },
  {
    number: "03",
    name: "Flavoro Food",
    category: "Food / React",
    description: "A food ordering experience with menu browsing, food details and ordering-oriented user flows.",
    stack: ["React", "JavaScript", "CSS", "Context API", "REST API"],
    url: "https://flavoro-food.vercel.app/",
    featured: false
  },
  {
    number: "04",
    name: "Notes App",
    category: "State Management",
    description: "A notes management application with create, view, edit and delete functionality powered by RTK Query and JSON Server.",
    stack: ["React", "Redux Toolkit", "RTK Query", "JSON Server"],
    url: "",
    featured: false
  },
  {
    number: "05",
    name: "MediaHub",
    category: "Media / API",
    description: "A media search and management application that consumes REST API data and manages application state with Redux Toolkit.",
    stack: ["React", "Redux Toolkit", "REST API", "CSS"],
    url: "https://magenta-dieffenbachia-d13b38.netlify.app/",
    featured: false
  },
  {
    number: "06",
    name: "E-Commerce App",
    category: "E-commerce",
    description: "An online shopping experience with product listing, search, product details, cart, checkout, authentication screens and order confirmation.",
    stack: ["React", "JavaScript", "Redux Toolkit", "React Router", "Tailwind CSS"],
    url: "https://quiet-cranachan-0be386.netlify.app/",
    featured: true
  },
  {
    number: "07",
    name: "React Performance & Data Fetching",
    category: "Performance",
    description: "A learning project demonstrating API data fetching, pagination, infinite scrolling and performance monitoring using Web Core Vitals.",
    stack: ["React", "TanStack Query", "Axios", "Intersection Observer", "Web Core Vitals"],
    url: "https://infinite-scroll-six-gamma.vercel.app/",
    featured: false
  },
  {
    number: "08",
    name: "Dockerized Full-Stack App",
    category: "Full-stack / Real-time",
    description: "A Dockerized React and Node.js application with real-time collaboration support using Socket.IO and Y-Socket.IO.",
    stack: ["React", "Node.js", "Express.js", "Socket.IO", "Y-Socket.IO", "Docker"],
    url: "https://docker-uses-1.onrender.com",
    featured: true
  },
  {
    number: "09",
    name: "NexaCart",
    category: "E-commerce / Admin",
    description: "An e-commerce application with product search and filtering, infinite scroll, customer authentication, cart, wishlist, protected routes, role-based admin access and an admin dashboard.",
    stack: ["React", "JavaScript", "React Router", "Context API", "Tailwind CSS", "LocalStorage"],
    url: "https://nexa-cart-1.vercel.app/",
    featured: true
  },
  {
    number: "10",
    name: "NexaJewels",
    category: "E-commerce / UI",
    description: "A jewellery e-commerce experience featuring product search and filtering, product details, customer authentication, cart, wishlist, checkout, order management and a premium green-and-gold visual theme.",
    stack: ["React", "JavaScript", "React Router", "Redux Toolkit", "Tailwind CSS", "LocalStorage", "Framer Motion"],
    url: "https://nexa-jewel-nu.vercel.app",
    featured: true
  },
  {
    number: "11",
    name: "Personal Portfolio",
    category: "Creative Development",
    description: "This portfolio: an interactive personal website combining 3D visuals, smooth scrolling, scroll-triggered motion, responsive layouts and project storytelling.",
    stack: ["React", "Three.js", "React Three Fiber", "GSAP", "Lenis", "Framer Motion"],
    url: "",
    featured: true,
    ongoing: true
  }
];
