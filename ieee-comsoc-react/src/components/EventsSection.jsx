// src/components/EventsSection.jsx
import React, { useState } from 'react';
import { Typography, Container, Box, Card, CardContent, CardMedia, Button, Grid, Tabs, Tab } from '@mui/material';
import { EVENTS, ASSETS } from '../data/appData';

// src/components/AboutSection.jsx
// ... (imports)
const AboutSection = () => (
    <Box id="about" className="py-12 bg-white">
        <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
                {/* About Institution - Removed 'item' */}
                <Grid xs={12} md={6} order={{ xs: 2, md: 1 }}>
                    <Box className="flex justify-center">
                        <img src={ASSETS.kecGlobe} alt="KEC Globe" className="w-full max-w-sm object-contain" />
                    </Box>
                </Grid>
                {/* Removed 'item' */}
                <Grid xs={12} md={6} order={{ xs: 1, md: 2 }}>
                    <Typography variant="h5" component="h3" className="font-bold text-ieee-blue mb-3 italic border-b-2 border-ieee-blue pb-1">
                        {INSTITUTION_INFO.heading}
                    </Typography>
                    <Typography variant="body1" className="text-justify text-gray-700">
                        {INSTITUTION_INFO.text}
                    </Typography>
                </Grid>

                {/* About ComSoc - Removed 'item' */}
                <Grid xs={12} md={6} order={{ xs: 3 }}>
                    <Typography variant="h5" component="h3" className="font-bold text-ieee-blue mb-3 border-b-2 border-ieee-blue pb-1">
                        {COMSOC_INFO.heading}
                    </Typography>
                    <Typography variant="body1" className="text-justify text-gray-700">
                        {COMSOC_INFO.text}
                    </Typography>
                </Grid>
                {/* Removed 'item' */}
                <Grid xs={12} md={6} order={{ xs: 4 }}>
                    <Box className="bg-gray-100 p-6 h-64 flex items-center justify-center rounded-xl shadow-lg">
                        <img src={ASSETS.comsocLogo} alt="ComSoc Logo" className="max-h-full max-w-full object-contain" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
);

export default AboutSection;