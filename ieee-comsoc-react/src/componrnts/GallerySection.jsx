// src/components/GallerySection.jsx
import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import { EVENTS } from '../data/appData';

// Modern, scroll-reveal inspired design for the image grid.
const GallerySection = () => {
    return (
        <Box id="gallery" className="py-12 bg-white">
            <Container maxWidth="lg">
                <Typography variant="h4" component="h2" className="text-center font-extrabold text-ieee-blue mb-10">
                    𝑮𝒂𝒍𝒍𝒆𝒓𝒚 𝑷𝒐𝒊𝒏𝒕
                </Typography>
                
                <Grid container spacing={4}>
                    {EVENTS.gallery.map((item, index) => (
                        // Placeholder classes for scroll-reveal effect
                        <Grid 
                            item 
                            key={index} 
                            xs={12} 
                            sm={6} 
                            md={4} 
                            lg={3}
                            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <Box className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] h-full">
                                <img 
                                    src={item.image} 
                                    alt={item.alt} 
                                    className="w-full h-48 object-cover" 
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default GallerySection;