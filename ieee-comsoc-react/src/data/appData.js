// src/data/appData.js

// Paths reference assets in your /public folder
const ASSETS = {
  headerBg: '/KECB.jpg',
  logoWhite: '/LOGOW.png',
  kecGlobe: '/KECG.png',
  comsocLogo: '/SL2.png',
  statImg: '/SL3.jpg',
};

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'Events', href: '#events' },
  { name: 'About Us', href: '#about' },
  { name: 'Membership', href: '#membership' },
  { name: 'Our Team', href: 'Our_Team.html' },
  { name: 'Contact Us', href: '#contact' },
];

const CONTACT_INFO = {
  email: 'ieeecomsoc.kec@gmail.com',
  phone: '+91 9489234282',
  instagram: '@ieee.comsoc.kec',
  social: {
    facebook: 'https://www.facebook.com/YourPage',
    twitter: 'https://x.com/YourHandle',
    linkedin: 'https://www.linkedin.com/in/YourProfile',
    instagram: 'https://www.instagram.com/ieee.comsoc.kec',
  },
};

const INSTITUTION_INFO = {
    heading: '𝑨𝒃𝒐𝒖𝒕 𝑰𝒏𝒔𝒕𝒊𝒕𝒖𝒕𝒊𝒐𝒏',
    text: 'Kongu Engineering College (KEC), one of the foremost multi-professional research-led Institutions, is internationally a recognized leader in professional and career-oriented education. It provides an integral, inter-disciplinary education – a unique intersection between theory and practice, passion and reason. The college offers courses of study that are on the frontiers of knowledge, in a stimulating environment that fosters rigorous scholarship and supportive community. Established in 1983.',
};

const COMSOC_INFO = {
    heading: '𝑨𝒃𝒐𝒖𝒕 𝑲𝑬𝑪 𝑰𝑬𝑬𝑬 𝑪𝒐𝒎𝒎𝒖𝒏𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝑺𝒐𝒄𝒊𝒆𝒕𝒚',
    text: 'The IEEE Communications Society (ComSoc) at Kongu Engineering College operates under the KEC IEEE Student Branch, committed to promoting innovation and excellence in communication and networking technologies. We offer a platform for students to explore and engage in emerging areas such as 5G, IoT, AI-driven communication systems, wireless networks, and network security. Our society encourages hands-on learning, research, and collaboration through workshops, technical talks, student-led projects, and participation in IEEE conferences.',
};


const EVENTS = {
  upcoming: [
    // FIX: Using a local asset (SL1.png) as a reliable placeholder
    { title: "AI Workshop", date: "July 20, 2025", image: '/SL1.png', link: '#' }, 
    { title: "ML Meetup", date: "August 10, 2025", image: '/SL1.png', link: '#' },
  ],
  completed: [
    { title: "Prathiyogitha 2K25", date: "Apr 11 & 12, 2025", image: '/5.png' },
    { title: "Software Hackathon", date: "Apr 11 & 12, 2025", image: '/7.png' },
    { title: "Impulzi", date: "Oct 23, 2024", image: '/EVE2.jpg' },
    { title: "MATLAB Workshop", date: "Sep 18, 2024", image: '/EVE5.jpg' },
    { title: "Techy Graphy", date: "Sep 04, 2024", image: '/EVE4.jpg' },
    { title: "Impulzi", date: "Mar 13, 2024", image: '/EVE1.jpg' },
  ],
  gallery: [
    { image: '/KEC1.jpg', alt: 'KEC Event 1' },
    { image: '/KEC2.JPG', alt: 'KEC Event 2' },
    { image: '/KEC4.jpg', alt: 'KEC Event 3' },
    { image: '/KEC5.jpg', alt: 'KEC Event 4' },
  ]
};

const MEMBERSHIP_DEPARTMENTS = [
  "Computer Science and Engineering",
  "Electronics and Communication Engineering",
  "Electrical and Electronics Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Information Technology",
  "Artificial Intelligence and Data Science",
  "Artificial Intelligence and Machine Learning"
];

export { 
    ASSETS, 
    NAV_ITEMS, 
    CONTACT_INFO, 
    EVENTS, 
    MEMBERSHIP_DEPARTMENTS,
    INSTITUTION_INFO,
    COMSOC_INFO
};