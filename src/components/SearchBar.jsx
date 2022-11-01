import { IconButton, Paper } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchedText, setSearchedText] = useState('');
    const navigate = useNavigate();

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (searchedText) {
            navigate(`search/${searchedText}`);
            setSearchedText('');
        }
    };

    return (
        <Paper
            component='form'
            onSubmit={searchSubmitHandler}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
            }}
        >
            <input className='search-bar' placeholder='Search...' value={searchedText} onChange={(e) => setSearchedText(e.target.value)} />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
