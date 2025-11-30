// src/components/Footer.jsx
// ... (imports)
const Footer = () => (
    <Box component="footer" id="contact" className="bg-ieee-blue text-white py-10 mt-10">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us & Social - Removed 'item' */}
          <Grid xs={12} md={4}>
            <Typography variant="h6" className="mb-3 font-bold">About Us</Typography>
            {/* ... */}
          </Grid>

          {/* Quick Links - Removed 'item' */}
          <Grid xs={12} md={3}>
            <Typography variant="h6" className="mb-3 font-bold">Quick Links</Typography>
            {/* ... */}
          </Grid>

          {/* Contact Info - Removed 'item' */}
          <Grid xs={12} md={4}>
            <Typography variant="h6" className="mb-3 font-bold">Contact</Typography>
            {/* ... */}
          </Grid>
        </Grid>

        {/* ... */}
      </Container>
    </Box>
);

export default Footer;