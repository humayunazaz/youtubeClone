import { Box } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Feeds } from '../utils/Feeds';
import { fetchFromApi } from '../utils/fetchFromApi';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = () => {
    const [channelDetails, setChannelDetails] = useState(null);
    const [videos, setVideos] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const channelData = await fetchFromApi(`channels?part=snippet&id=${id}`);
                const videoData = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);
                setChannelDetails(channelData?.items[0]);
                setVideos(new Feeds(videoData?.items).feeds);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <Box minHeight='95vh'>
            <Box>
                <div
                    style={{
                        height: '300px',
                        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                        zIndex: 10,
                    }}
                />
                <ChannelCard channelDetail={channelDetails} marginTop='-93px' />
            </Box>
            <Box p={2} display='flex'>
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    );
};

export default ChannelDetail;
