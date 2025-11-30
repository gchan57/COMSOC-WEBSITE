// src/components/AboutSection.jsx
import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import { ASSETS, INSTITUTION_INFO, COMSOC_INFO } from '../data/appData'; 

const AboutSection = () => (
    // Cleaned up background color and spacing
    <Box id="about" className="py-16 bg-gray-50">
        <Container maxWidth="lg">
            <Grid container spacing={8} alignItems="center">
                {/* About Institution Text */}
                <Grid xs={12} md={6} order={{ xs: 2, md: 1 }}>
                    <Box className="bg-white p-6 rounded-xl shadow-lg h-full transition-shadow hover:shadow-2xl">
                        <Typography variant="h5" component="h3" className="font-bold text-ieee-blue mb-4 border-b-4 border-ieee-teal pb-2 italic">
                            {INSTITUTION_INFO.heading}
                        </Typography>
                        <Typography variant="body1" className="text-justify text-gray-700 leading-relaxed">
                            {INSTITUTION_INFO.text}
                        </Typography>
                    </Box>
                </Grid>
                {/* Institution Image */}
                <Grid xs={12} md={6} order={{ xs: 1, md: 2 }}>
                    <Box className="flex justify-center p-4">
                        <img 
                            src={ASSETS.kecGlobe} 
                            alt="KEC Globe" 
                            className="w-full max-w-md object-contain rounded-full shadow-2xl transition-transform duration-500 hover:scale-[1.05]" 
                        />
                    </Box>
                </Grid>

                {/* About ComSoc Image/Stats */}
                <Grid xs={12} md={6} order={{ xs: 3 }}>
                    <Box className="bg-ieee-blue p-6 h-64 flex items-center justify-center rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.05]">
                        <img src={ASSETS.statImg} alt="ComSoc Statistics" className="max-h-full max-w-full object-contain" />
                    </Box>
                </Grid>
                {/* About ComSoc Text */}
                <Grid xs={12} md={6} order={{ xs: 4 }}>
                    <Box className="bg-white p-6 rounded-xl shadow-lg h-full transition-shadow hover:shadow-2xl">
                        <Typography variant="h5" component="h3" className="font-bold text-ieee-blue mb-4 border-b-4 border-ieee-teal pb-2">
                            {COMSOC_INFO.heading}
                        </Typography>
                        <Typography variant="body1" className="text-justify text-gray-700 leading-relaxed">
                            {COMSOC_INFO.text}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
);

export default AboutSection;