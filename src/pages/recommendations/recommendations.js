import React, {useState} from 'react';
import './recommendations.css'
import TextField from '@material-ui/core/TextField';

export const Recommendations = ({children}) => {
    const [value, setValue] = useState();
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className='recommendations'>
            <h1>Recommendations</h1>
        <TextField
        className='recommendations-input'
          id="outlined-multiline-flexible"
          label="Make a recommendation"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
        </div>
    )
}