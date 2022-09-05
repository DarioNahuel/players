import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';
import { filterByAge } from '../actions/players';

function InputAge(props) {

    const { filterByAge } = props;

    const [age, setAge] = useState('');

    const ageValidation = age && (age < 18 || age > 40);

    const handleChange = event => {
        const result = event.target.value;
        setAge(result);

        if (!(result && (result < 18 || result > 40))) {

            filterByAge(result);
        }

    };

    return (
        <>
            <TextField
                label="Age"
                variant="outlined"
                type="number"
                inputProps={{ min: '18', max: '40', step: '1' }}
                value={age}
                onChange={handleChange}
                error={ageValidation}
                helperText={ageValidation ? 'Should put age between 18 and 40' : ''}
            />
        </>
    );
}

export default connect(
    null,
    {
        filterByAge,
    }
)(InputAge);