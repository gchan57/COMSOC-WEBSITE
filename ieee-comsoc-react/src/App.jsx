// src/App.jsx

import React from 'react';
import { Box } from '@mui/material';

// Import the new modular components
import Navbar from './components/Navbar';
import HeroHeader from './components/HeroHeader';
import EventsSection from './components/EventsSection';
import AboutSection from './components/AboutSection';
import MembershipForm from './components/MembershipForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
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