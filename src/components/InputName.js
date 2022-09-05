import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';
import { filterByName } from '../actions/players';

function InputName(props) {

    const { filterByName } = props;

    const [name, setName] = useState('');

    const handleChange = event => {
        const result = event.target.value.replace(/[^a-z]/gi, '');

        filterByName(result);
        setName(result);
    };

    return (
        <>
            <TextField label="Name" variant="outlined" value={name} onChange={handleChange} />
        </>
    );
}

export default connect(
    null,
    {
      filterByName,
    }
)(InputName);