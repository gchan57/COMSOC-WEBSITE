// src/App.jsx

import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Container, Box, Card, CardContent, CardMedia,
  Grid, Tabs, Tab, TextField, Select, MenuItem, InputLabel, FormControl,
} from '@mui/material';
import {
  Menu, Event, Group, ContactMail, Home as HomeIcon, Facebook, Twitter, LinkedIn, Instagram,
} from '@mui/icons-material';

// --- Data Stubs (Paths reference the /public folder) ---
const imageAssets = {
    headerBg: '/KECB.jpg',
    logoWhite: '/LOGOW.png',
    kecGlobe: '/KECG.png',
    statImg: '/SL3.jpg',
    // Assets pulled from your uploaded files
    event5: '/5.png',
    event7: '/7.png', 
    eventEVE2: '/EVE2.jpg', 
    eventEVE5: '/EVE5.jpg', 
    eventEVE4: '/EVE4.jpg', 
    eventEVE1: '/EVE1.jpg',
};

const completedEvents = [
  { title: "Prathiyogitha 2K25", date: "Apr 11 & 12, 2025", image: imageAssets.event5 },
  { title: "Software Hackathon", date: "Apr 11 & 12, 2025", image: imageAssets.event7 },
  { title: "Impulzi", date: "Oct 23, 2024", image: imageAssets.eventEVE2 },
  { title: "MATLAB Workshop", date: "Sep 18, 2024", image: imageAssets.eventEVE5 },
  { title: "Techy Graphy", date: "Sep 04, 2024", image: imageAssets.eventEVE4 },
  { title: "Impulzi", date: "Mar 13, 2024", image: imageAssets.eventEVE1 },
];

const upcomingEvents = [
  { title: "AI Workshop", date: "July 20, 2025", image: 'https://via.placeholder.com/350x200?text=AI+Workshop' },
  { title: "ML Meetup", date: "August 10, 2025", image: 'https://via.placeholder.com/350x200?text=ML+Meetup' },
];

// --- Helper Components ---

const Navbar = () => {
  const navItems = [
    { name: 'Home', icon: <HomeIcon />, href: '#home' },
    { name: 'Membership', icon: <Group />, href: '#membership' },
    { name: 'Our Team', icon: <Group />, href: 'Our_Team.html' },
    { name: 'Events', icon: <Event />, href: '#events' },
    { name: 'Contact Us', icon: <ContactMail />, href: '#contact' },
  ];

  return (
    <AppBar position="sticky" className="shadow-lg bg-white">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box className="flex items-center">
            <img src={imageAssets.logoWhite} alt="IEEE ComSoc Logo" className="h-10 w-auto mr-3" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              className="hidden md:block font-bold text-ieee-blue"
            >
              IEEE COMSOC KEC
            </Typography>
          </Box>
          <Box className="flex-grow hidden md:flex justify-end space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                color="inherit"
                href={item.href}
                className="text-gray-700 hover:bg-ieee-blue hover:text-white normal-case font-semibold"
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Box className="flex-grow flex justify-end md:hidden">
            <Button color="inherit" aria-label="menu" className="text-ieee-blue">
              <Menu />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const HeroHeader = () => (
  <Box
    id="home"
    className="relative h-[450px] flex items-center justify-center text-center p-4 bg-cover bg-center"
    style={{ backgroundImage: `url(${imageAssets.headerBg})` }}
  >
    <div className="absolute inset-0 bg-ieee-blue opacity-80"></div>
    <Container maxWidth="lg" className="relative z-10 text-white">
      <Typography variant="h1" className="text-5xl md:text-7xl font-extrabold mb-2 italic tracking-wider">
        𝑰𝑬𝑬𝑬 𝑪𝑶𝑴𝑺𝑶𝑪
      </Typography>
      <Typography variant="h3" className="text-xl md:text-3xl font-light tracking-wide">
        𝕀𝔼𝔼𝔼 𝕊𝕥𝕦𝕕𝕖𝕟𝕥 𝔹𝕣𝕒𝕟𝕔𝕙 𝕠𝕗 𝕂𝕠𝕟𝕘𝕦 𝔼𝕟𝕘𝕚𝕟𝕖𝕖𝕣𝕚𝕟𝕘 ℂ𝕠𝕝𝕝𝕖𝕘𝕖
      </Typography>
    </Container>
  </Box>
);

const EventCard = ({ title, date, image, status }) => (
    <Card className="shadow-xl rounded-xl transition-transform duration-300 hover:scale-[1.03]">
      <CardMedia
        component="img"
        height="180"
        image={image || 'https://via.placeholder.com/350x200?text=Event+Image'}
        alt={title}
        className="object-cover h-48"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" className="font-bold text-ieee-blue">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mb-3">
          <strong>Date:</strong> {date}
        </Typography>
        {status === 'upcoming' ? (
          <Button variant="contained" className="bg-ieee-blue hover:bg-ieee-blue/90 w-full" href="#">
            Register
          </Button>
        ) : (
          <Button variant="outlined" disabled className="w-full border-gray-300 text-gray-500">
            Closed
          </Button>
        )}
      </CardContent>
    </Card>
);

const EventsSection = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box id="events" className="py-12 bg-gray-50">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" className="text-center font-extrabold text-ieee-blue mb-8">
          𝑬𝒗𝒆𝒏𝒕𝒔 & 𝑮𝒂𝒍𝒍𝒆𝒓𝒚
        </Typography>
        <Grid container spacing={4}>
          {/* Events Column */}
          <Grid item xs={12} lg={4}>
            <Box className="bg-white p-6 rounded-xl shadow-lg h-full">
              <Tabs value={value} onChange={handleChange} centered className="mb-4">
                <Tab label="Upcoming" />
                <Tab label="Completed" />
              </Tabs>

              <Box className="space-y-6">
                {(value === 0 ? upcomingEvents : completedEvents).map((event, index) => (
                    <EventCard key={index} {...event} status={value === 0 ? "upcoming" : "completed"} />
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Gallery Column */}
          <Grid item xs={12} lg={8}>
            <Box className="bg-white p-6 rounded-xl shadow-lg h-full">
              <Typography variant="h5" component="h3" className="font-bold text-ieee-blue mb-4">
                𝑮𝒂𝒍𝒍𝒆𝒓𝒚 𝑷𝒐𝒊𝒏𝒕
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <img src="/KEC1.jpg" alt="Event Image 1" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img src="/KEC2.JPG" alt="Event Image 2" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img src="/KEC4.jpg" alt="Event Image 3" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img src="/KEC5.jpg" alt="Event Image 4" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </Grid>
                <Grid item xs={12} md={8}>
                    {/* Stats Image (SL3.jpg) */}
                    <img src={imageAssets.statImg} alt="Society Data" className="w-full h-48 object-contain bg-gray-100 p-4 rounded-lg shadow-md" />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const AboutSection = () => (
    <Container maxWidth="lg" className="py-12">
        <Grid container spacing={6} alignItems="center">
            {/* About Institution */}
            <Grid item xs={12} md={6}>
                <Box className="flex justify-center mb-6 md:mb-0">
                    <img src={imageAssets.kecGlobe} alt="KEC Globe" className="w-full max-w-sm object-contain" />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h5" component="h3" className="font-bold text-ieee-blue mb-3 italic">
                    𝑨𝒃𝒐𝒖𝒕 𝑰𝒏𝒔𝒕𝒊𝒕𝒖𝒕𝒊𝒐𝒏
                </Typography>
                <Typography variant="body1" className="text-justify text-gray-700">
                    Kongu Engineering College (KEC), one of the foremost multi-professional research-led Institutions, is internationally a recognized leader in professional and career-oriented education. It provides an integral, inter-disciplinary education – a unique intersection between theory and practice, passion and reason. The college offers courses of study that are on the frontiers of knowledge, in a stimulating environment that fosters rigorous scholarship and supportive community. Established in 1983.
                </Typography>
            </Grid>

            {/* About ComSoc */}
            <Grid item xs={12} md={6}>
                <Typography variant="h5" component="h3" className="font-bold text-ieee-blue mb-3">
                    𝑨𝒃𝒐𝒖𝒕 𝑲𝑬𝑪 𝑰𝑬𝑬𝑬 𝑪𝒐𝒎𝒎𝒖𝒏𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝑺𝒐𝒄𝒊𝒆𝒕𝒚
                </Typography>
                <Typography variant="body1" className="text-justify text-gray-700">
                    The IEEE Communications Society (ComSoc) at Kongu Engineering College operates under the KEC IEEE Student Branch, committed to promoting innovation and excellence in communication and networking technologies. We offer a platform for students to explore and engage in emerging areas such as 5G, IoT, AI-driven communication systems, wireless networks, and network security. Our society encourages hands-on learning, research, and collaboration through workshops, technical talks, student-led projects, and participation in IEEE conferences.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box className="h-64 flex items-center justify-center rounded-xl shadow-lg">
                    <img src="/SL2.png" alt="ComSoc Logo" className="max-h-full max-w-full p-4 object-contain" />
                </Box>
            </Grid>
        </Grid>
    </Container>
);

const MembershipForm = () => {
  const departments = [
    "Computer Science and Engineering",
    "Electronics and Communication Engineering",
    "Electrical and Electronics Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Information Technology",
    "Artificial Intelligence and Data Science",
    "Artificial Intelligence and Machine Learning"
  ];

  return (
    <Box id="membership" className="py-12 bg-ieee-blue/5">
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" className="text-center font-extrabold text-ieee-blue mb-2">
          𝑀𝑒𝑚𝑏𝑒𝑟𝑠ℎ𝑖𝑝
        </Typography>
        <Typography variant="h6" className="text-center text-gray-700 mb-8">
          𝐴𝑟𝑒 𝑦𝑜𝑢 𝑙𝑜𝑜𝑘𝑖𝑛𝑔 𝑓𝑜𝑟 𝑎 𝑐ℎ𝑎𝑛𝑔𝑒? 𝐺𝑒𝑡 𝑟𝑒𝑎𝑑𝑦 𝑡𝑜 𝑡𝑎𝑘𝑒 𝑎 𝑠𝑡𝑒𝑝 𝑡𝑜𝑤𝑎𝑟𝑑𝑠 𝑦𝑜𝑢𝑟 𝑏𝑟𝑖𝑔ℎ𝑡 𝑓𝑢𝑡𝑢𝑟𝑒
        </Typography>

        <Card className="p-6 shadow-2xl rounded-xl">
          <form className="space-y-6">
            <TextField fullWidth label="Full Name" placeholder="Please enter your name" required />
            <TextField fullWidth label="Roll Number" placeholder="Please enter your roll number" required />
            <TextField fullWidth label="Email" type="email" placeholder="Please enter your mail id" required />
            
            <FormControl fullWidth required>
              <InputLabel>Department</InputLabel>
              <Select label="Department" defaultValue="">
                <MenuItem value="" disabled>
                  Select your department
                </MenuItem>
                {departments.map((dept) => (
                  <MenuItem key={dept} value={dept.toLowerCase().replace(/\s/g, '-')}>
                    {dept}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box className="text-right pt-4">
              <Button
                type="submit"
                variant="contained"
                className="bg-ieee-blue hover:bg-ieee-blue/90 px-8 py-3 font-semibold"
              >
                Join Society
              </Button>
            </Box>
          </form>
        </Card>
      </Container>
    </Box>
  );
};

const Footer = () => (
    <Box component="footer" id="contact" className="bg-ieee-blue text-white py-10 mt-10">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="mb-3 font-bold">About Us</Typography>
            <Typography variant="body2">
              We are dedicated to creating innovative solutions for a better tomorrow. Stay connected with us!
            </Typography>
            <Box className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300"><Facebook /></a>
              <a href="https://x.com/YourHandle" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300"><Twitter /></a>
              <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300"><LinkedIn /></a>
              <a href="https://www.instagram.com/ieee.comsoc.kec" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300"><Instagram /></a>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="mb-3 font-bold">Quick Links</Typography>
            <Box component="ul" className="list-none p-0 space-y-1">
              <li><a href="#home" className="text-white hover:underline text-sm">Home</a></li>
              <li><a href="#events" className="text-white hover:underline text-sm">Events</a></li>
              <li><a href="Our_Team.html" className="text-white hover:underline text-sm">Team</a></li>
              <li><a href="#contact" className="text-white hover:underline text-sm">Contact</a></li>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="mb-3 font-bold">Contact</Typography>
            <Typography variant="body2">Email: ieeecomsoc.kec@gmail.com</Typography>
            <Typography variant="body2">Phone: +91 9489234282</Typography>
            <Typography variant="body2">Instagram: @ieee.comsoc.kec</Typography>
          </Grid>
        </Grid>

        <Box className="text-center pt-8 border-t border-ieee-blue/50 mt-6">
          <Typography variant="caption">&copy; 2025 KEC IEEE Communication Society. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
);


// --- Main Application Component ---

const App = () => {
  return (
    <Box className="min-h-screen">
      <Navbar />
      <main>
        <HeroHeader />
        <EventsSection />
        <AboutSection />
        <MembershipForm />
      </main>
      <Footer />
    </Box>
  );
};

export default App;