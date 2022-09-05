import React, { useState } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { filterByPosition } from '../actions/players';

function SelectPosition(props) {
    const { filterByPosition, positions } = props;

    const [position, setPosition] = useState('');

    const handleChange = (event) => {
        setPosition(event.target.value);
        filterByPosition(event.target.value);
    };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Position</InputLabel>
        <Select
          value={position}
          label="Position"
          onChange={handleChange}
        >
            {positions.map((position) => (
                <MenuItem value={position}>{position}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default connect(
    null,
    {
        filterByPosition,
    }
)(SelectPosition);