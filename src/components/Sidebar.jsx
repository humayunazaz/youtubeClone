import { Stack } from '@mui/material';
import React from 'react';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack sx={{ overflowY: 'auto', flexDirection: { md: 'column' }, height: { sx: 'auto', md: '95%' } }} direction='row'>
            {categories.map((category, idx) => (
                <button
                    className='category-btn'
                    onClick={() => setSelectedCategory(category.name)}
                    key={`${category.name}${idx}`}
                    style={{ background: selectedCategory === category.name && '#FC1503', color: 'white' }}
                >
                    <span style={{ color: selectedCategory === category.name ? 'white' : 'red', marginRight: '15px' }}>
                        {category.icon}
                    </span>
                    <span style={{ opacity: selectedCategory === category.name ? '1' : '0.8' }}>{category.name}</span>
                </button>
            ))}
        </Stack>
    );
};

export default Sidebar;
