const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  // {
  //   id: "trash",
  //   name: "Archive", // was "Trash"
  //   icon: "trash.png",
  //   canOpen: false,
  // },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["HTML", "React.js", "Next.js"],
  },
  {
    category: "Styling",
    items: ["CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Languages",
    items: ["Python", "C++", "Javascript"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "PHP"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", ""],
  },
  {
    category: "Creative Tools",
    items: ["Canva", "Premiere Pro", "Filmora"]
  }
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#24292e",
    link: "https://github.com/SiddheshCodes4554",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "/icons/instagram.png",
    bg: "#ee2a7b",
    link: "https://www.instagram.com/siddhesh_gawade11/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/siddheshgawade11/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/Gallery1.jpg",
  },
  {
    id: 2,
    img: "/images/Gallery4.jpg",
  },
  {
    id: 3,
    img: "/images/Gallery2.jpg",
  },
  {
    id: 4,
    img: "/images/Gallery3.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Club Management Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Club-Management-Platform.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "ClubCentral is a modern, full-stack management platform built to streamline how college clubs operate. It centralizes everything—members, roles, events, tasks, finances, and committees—into one clean, efficient system.",
            "The platform includes an advanced Institution Mode, allowing colleges to manage multiple clubs from a single dashboard. Institutions can create clubs, assign presidents, track performance, monitor finances, and view cross-club analytics.",
            "ClubCentral features powerful tools like event planning, task management, finance approvals, team organization, social media scheduling, and custom role permissions. Each module solves real operational challenges faced by student organizations.",
            "Built with scalable architecture and modern UI/UX, ClubCentral demonstrates my ability to design and develop complex, production-ready systems used for real organizational management.",
          ],
        },
        {
          id: 2,
          name: "Club-Management-Platform",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://clubcentral.onrender.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "ClubCentral.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/ClubCentral.png",
        },
        {
          id: 5,
          name: "ClubCentral-2.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "https://i.postimg.cc/G3v5MBRs/Screenshot-14-11-2025-95042-localhost.jpg",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Movie Ticket Booking App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-5",
      children: [
        {
          id: 1,
          name: "Movie-Ticket-Booking-App.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 right-10",
          description: [
            "This project is a modern Movie Ticket Booking SPA built with Next.js, React, TypeScript, Tailwind CSS, and Supabase. It lets users browse movies, view details, select showtimes, pick seats, add food items, and complete bookings through a smooth, responsive, and user-friendly interface.",
            "The app includes secure authentication, interactive seat selection, a multi-step booking flow, booking history, and a simulated payment system. Supabase handles user auth and database operations, ensuring real-time updates and reliable performance.",
            "esigned with shadcn/ui, Radix UI, and Framer Motion, the application features polished UI components, dark/light mode, and an optimized architecture. It’s a complete example of a production-ready Next.js project showcasing modern full-stack development.",
          ],
        },
        {
          id: 2,
          name: "cinepass-movie.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://cinepass-movie.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Movie-Ticket-Booking-App.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/Movie-1.png",
        },
        {
          id: 5,
          name: "Github.Repo",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/SiddheshCodes4554/movie",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "School Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-15 left-80",
      windowPosition: "top-[35vh] left-5",
      children: [
        {
          id: 1,
          name: "School-Website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A production-ready school management website developed for Sindhururg Sainik School Amboli, featuring a comprehensive admin panel that enables non-technical staff to manage all website content without code modifications. Built with PHP, MySQL, and Bootstrap, this project demonstrates practical full-stack development skills applied to solve real-world educational institution needs.",
            "The platform includes a complete content management system with modules for staff management, student admissions processing, photo/video galleries, news updates, achievements tracking, and alumni records. The responsive frontend delivers an engaging user experience with image sliders, custom forms, and Google Maps integration, while the backend provides administrators with an intuitive dashboard for data visualization, user management, and Excel export capabilities.",
          ],
        },
        {
          id: 2,
          name: "school-website.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://drive.google.com/file/d/1azlXpAYYxxQTSvqWOxuiKsodzI1Z0hIW/view",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "school-website.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "https://res-console.cloudinary.com/donzpxmic/thumbnails/v1/image/upload/v1748957035/azNyeTl4MHl2a2xuc2tnanNjZ2E=/drilldown",
        },
        {
          id: 5,
          name: "Github.Repo",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/SiddheshCodes4554/SchoolWebsite",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };