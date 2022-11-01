import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Feeds } from '../utils/Feeds';
import { fetchFromApi } from '../utils/fetchFromApi';
import Videos from './Videos';

const SearchFeed = () => {
    const [videos, setVideos] = useState();
    const { searchTerm } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFromApi(`search?part=snippet&q=${searchTerm}`);
                setVideos(new Feeds(data?.items).feeds);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [searchTerm]);

    return (
        <Box p={2} minHeight='95vh'>
            <Typography variant='h4' fontWeight={900} color='white' mb={3} ml={{ sm: '100px' }}>
                Search Results for <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
            </Typography>
            <Box display='flex'>
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    );
};

export default SearchFeed;
