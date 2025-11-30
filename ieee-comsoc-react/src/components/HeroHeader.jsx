// src/components/HeroHeader.jsx
import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material'; // <--- FIX IS HERE: Added Button
import { ASSETS } from '../data/appData';

const HeroHeader = () => (
  <Box
    id="home"
    className="relative h-[450px] flex items-center justify-center text-center p-4 bg-cover bg-center"
    style={{ backgroundImage: `url(${ASSETS.headerBg})` }}
  >
    {/* Consistent overlay */}
    <div className="absolute inset-0 bg-ieee-blue opacity-85"></div>
    <Container maxWidth="lg" className="relative z-10 text-white">
      <Typography variant="h1" className="text-5xl md:text-7xl font-extrabold mb-2 italic tracking-wider">
        𝑰𝑬𝑬𝑬 𝑪𝑶𝑴𝑺𝑶𝑪
      </Typography>
      <Typography variant="h3" className="text-xl md:text-3xl font-light tracking-wide">
        𝕀𝔼𝔼𝔼 𝕊𝕥𝕦𝕕𝕖𝕟𝕥 𝔹𝕣𝕒𝕟𝕔𝕙 𝕠𝕗 𝕂𝕠𝕟𝕘𝕦 𝔼𝕟𝕘𝕚𝕟𝕖𝕖𝕣𝕚𝕟𝕘 ℂ𝕠𝕝𝕝𝕖𝕘𝕖
      </Typography>
      {/* Call to Action button */}
      <Box className="mt-8">
        <Button variant="contained" href="#events" className="bg-ieee-teal hover:bg-ieee-teal/90 text-white px-8 py-3 text-lg font-bold shadow-lg">
          Explore Events
        </Button>
      </Box>
    </Container>
  </Box>
);

export default HeroHeader;