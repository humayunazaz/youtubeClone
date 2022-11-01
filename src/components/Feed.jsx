import { Box, Stack, Typography } from '@mui/material';
import React, { useCallback } from 'react';

import { useState, useEffect } from 'react';
import { Feeds } from '../utils/Feeds';
import { fetchFromApi } from '../utils/fetchFromApi';
import { Sidebar, Videos } from './';

const Feed = () => {
    const [videos, setVideos] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('New');

    const fetchVideos = useCallback(async () => {
        try {
            const videos = await fetchFromApi(`search?part=snippet&q=${selectedCategory}`);

            setVideos(new Feeds(videos.items).feeds);
        } catch (error) {
            console.log(error);
        }
    }, [selectedCategory]);

    useEffect(() => {
        setVideos(null);

        fetchVideos();
    }, [selectedCategory, fetchVideos]);

    return (
        <Stack sx={{ flexDirection: { sm: 'column', md: 'row' } }}>
            <Box sx={{ height: { sm: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
                    Copyright © 2022
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography sx={{ color: 'white' }} variant='h4' mb={2} fontWeight='bold'>
                    {selectedCategory} <span style={{ color: '#FC1503' }}>Videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    );
};

export default Feed;
