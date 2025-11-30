// src/components/MembershipForm.jsx
import React from 'react';
import { Typography, Container, Box, Card, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import { MEMBERSHIP_DEPARTMENTS } from '../data/appData';

const MembershipForm = () => {
    // Basic form submission handler (you would integrate an API call here)
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Membership form submitted! (API integration needed)');
    };

  return (
    <Box id="membership" className="py-12 bg-ieee-gray">
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" className="text-center font-extrabold text-ieee-blue mb-2">
          𝑀𝑒𝑚𝑏𝑒𝑟𝑠ℎ𝑖𝑝
        </Typography>
        <Typography variant="h6" className="text-center text-gray-700 mb-8">
          𝐴𝑟𝑒 𝑦𝑜𝑢 𝑙𝑜𝑜𝑘𝑖𝑛𝑔 𝑓𝑜𝑟 𝑎 𝑐ℎ𝑎𝑛𝑔𝑒? 𝐺𝑒𝑡 𝑟𝑒𝑎𝑑𝑦 𝑡𝑜 𝑡𝑎𝑘𝑒 𝑎 𝑠𝑡𝑒𝑝 𝑡𝑜𝑤𝑎𝑟𝑑𝑠 𝑦𝑜𝑢𝑟 𝑏𝑟𝑖𝑔ℎ𝑡 𝑓𝑢𝑡𝑢𝑟𝑒
        </Typography>

        <Card className="p-6 shadow-2xl rounded-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <TextField fullWidth label="Full Name" placeholder="Please enter your name" required variant="outlined" />
            <TextField fullWidth label="Roll Number" placeholder="Please enter your roll number" required variant="outlined" />
            <TextField fullWidth label="Email" type="email" placeholder="Please enter your mail id" required variant="outlined" />
            
            <FormControl fullWidth required variant="outlined">
              <InputLabel>Department</InputLabel>
              <Select label="Department" defaultValue="">
                <MenuItem value="" disabled>
                  Select your department
                </MenuItem>
                {MEMBERSHIP_DEPARTMENTS.map((dept) => (
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
                className="bg-ieee-blue hover:bg-ieee-blue/90 px-8 py-3 font-semibold shadow-lg"
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

export default MembershipForm;