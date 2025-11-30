// src/components/Footer.jsx
// Import the required components from MUI
import { Typography, Container, Box, Grid } from '@mui/material'; 
// FIX: The original file had a commented-out section for imports, 
// I will assume it intended to import CONTACT_INFO, NAV_ITEMS, and ASSETS 
// to complete the footer content.
import { CONTACT_INFO, NAV_ITEMS, ASSETS } from '../data/appData'; 
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const getIcon = (platform) => {
    switch (platform) {
        case 'facebook': return <Facebook />;
        case 'twitter': return <Twitter />;
        case 'linkedin': return <LinkedIn />;
        case 'instagram': return <Instagram />;
        default: return null;
    }
};

const Footer = () => (
    <Box component="footer" id="contact" className="bg-ieee-blue text-white py-10 mt-10">
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* About Us & Social */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="mb-3 font-bold">About Us</Typography>
            <Typography variant="body2" className="text-gray-300">
                We are dedicated to promoting innovation and excellence in communication and networking technologies. Stay connected with us!
            </Typography>
            <Box className="flex space-x-4 mt-4">
                {Object.entries(CONTACT_INFO.social).map(([platform, link]) => (
                    <a 
                        key={platform} 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-ieee-teal transition duration-200"
                    >
                        {getIcon(platform)}
                    </a>
                ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="mb-3 font-bold">Quick Links</Typography>
            <ul className="list-none p-0 space-y-2">
                {NAV_ITEMS.map((item) => (
                    <li key={item.name}>
                        <a href={item.href} className="text-gray-300 hover:text-ieee-teal transition duration-200">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="mb-3 font-bold">Contact</Typography>
            <Typography variant="body2" className="text-gray-300">Email: {CONTACT_INFO.email}</Typography>
            <Typography variant="body2" className="text-gray-300">Phone: {CONTACT_INFO.phone}</Typography>
            <Typography variant="body2" className="text-gray-300">Instagram: {CONTACT_INFO.instagram}</Typography>
          </Grid>
        </Grid>

        <Box className="mt-8 pt-4 border-t border-gray-700 text-center">
            <Typography variant="caption">
                &copy; 2025 KEC IEEE Communication Society. All rights reserved.
            </Typography>
        </Box>
      </Container>
    </Box>
);

export default Footer;