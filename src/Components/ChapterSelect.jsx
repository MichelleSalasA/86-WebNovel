import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ChapterSelect = ({ chapter, setChapter }) => {
    const handleChange = (event) => {
        setChapter(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl>
            <InputLabel id="demo-simple-select-label">Chapter</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={chapter}
                onChange={handleChange}
            >
                <MenuItem value={1}>Chapter I</MenuItem>
                <MenuItem value={2}>Chapter II</MenuItem>
                <MenuItem value={3}>Chapter III</MenuItem>
            </Select>
        </FormControl>
        </Box>
    );
}

export default ChapterSelect;