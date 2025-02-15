import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, TextField, InputAdornment, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';

const SectionFirst = () => {
    const navigate = useNavigate();
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        // Navigate to dashboard with search parameters
        navigate('/dashboard', {
            state: {
                jobTitle: jobTitle,
                location: location,
                name: 'User' // You can modify this if you have user info
            }
        });
    };

    return (
        <Box sx={{ backgroundColor: '#eee6db', minHeight: '100vh', display: 'flex', paddingTop: '2%' }}
        className="dark:bg-slate-800"
        >
            <Grid container sx={{ height: '100%' }}>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/007/138/783/large_2x/recruitment-concept-girl-browsing-work-opportunities-online-using-job-search-app-or-website-on-laptop-free-photo.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100vh'
                    }}
                ></Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 4 }}>
                    <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                        Find The Perfect<br />Job For You
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'gray', marginTop: 2 }}>
                        Search your career opportunity through 12,000 jobs
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 4 }}>
                        <TextField
                            variant="outlined"
                            placeholder="Search job title"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            sx={{ flex: 1, marginRight: 2, '& .MuiOutlinedInput-root': { borderRadius: '20px', background: 'white', color: 'black' } }}
                        />
                        <TextField
                            variant="outlined"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            sx={{ flex: 1, '& .MuiOutlinedInput-root': { borderRadius: '20px', background: 'white', color: 'black' }}}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton 
                                            onClick={handleSearch}
                                            sx={{ bgcolor: 'orange', borderRadius: '20px', color: 'white', '&:hover': { bgcolor: '#d97706' } }}
                                        >
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <List sx={{ marginTop: 4 }}>
                        <ListItem>
                            <ListItemIcon>
                                <CheckIcon className='dark:text-white'/>
                            </ListItemIcon>
                            <ListItemText primary="Wide range of job categories" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckIcon className='dark:text-white'/>
                            </ListItemIcon>
                            <ListItemText primary="Flexible working hours" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckIcon className='dark:text-white'/>
                            </ListItemIcon>
                            <ListItemText primary="Remote work options" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SectionFirst;
