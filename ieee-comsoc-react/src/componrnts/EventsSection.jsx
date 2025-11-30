// src/components/EventsSection.jsx
import React, { useState } from 'react';
import { Typography, Container, Box, Card, CardContent, CardMedia, Button, Grid, Tabs, Tab } from '@mui/material';
import { EVENTS, ASSETS } from '../data/appData'; // Correct imports for the Events section

const EventCard = ({ event, isUpcoming }) => (
    <Card className="shadow-lg h-full flex flex-col transition-transform hover:scale-[1.02] rounded-xl">
        <CardMedia
            component="img"
            height="140"
            image={event.image}
            alt={event.title}
            className="h-40 object-cover"
        />
        <CardContent className="flex-grow">
            <Typography variant="h6" component="div" className="font-bold text-ieee-blue mb-1">
                {event.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Date: {event.date}
            </Typography>
        </CardContent>
        <Box className="p-4 pt-0">
            {isUpcoming ? (
                <Button variant="contained" href={event.link} className="bg-ieee-teal hover:bg-ieee-teal/90 w-full font-semibold">
                    Register Now
                </Button>
            ) : (
                <Button variant="outlined" disabled className="w-full text-gray-500 border-gray-300">
                    Completed
                </Button>
            )}
        </Box>
    </Card>
);

const EventsSection = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const currentEvents = value === 0 ? EVENTS.upcoming : EVENTS.completed;
    const isUpcoming = value === 0;

    return (
        <Box id="events" className="py-12 bg-ieee-gray">
            <Container maxWidth="lg">
                <Typography variant="h4" component="h2" className="text-center font-extrabold text-ieee-blue mb-8">
                    𝑬𝒗𝒆𝒏𝒕𝒔
                </Typography>
                
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="mb-6">
                    <Tabs value={value} onChange={handleChange} centered className="bg-white rounded-t-lg">
                        <Tab label="Upcoming Events" />
                        <Tab label="Completed Events" />
                    </Tabs>
                </Box>
                
                <Grid container spacing={4}>
                    {currentEvents.length > 0 ? (
                        currentEvents.map((event, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                <EventCard event={event} isUpcoming={isUpcoming} />
                            </Grid>
                        ))
                    ) : (
                        <Grid item xs={12}>
                            <Typography className="text-center text-gray-600 p-8">
                                {isUpcoming ? "No upcoming events scheduled at the moment. Check back soon!" : "No completed events found."}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </Box>
    );
};

export default EventsSection;