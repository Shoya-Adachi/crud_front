import React, { Dispatch, SetStateAction } from 'react';
import TextField from '@mui/material/TextField';

export interface props {
  label: string;
  state: string | number;
  setState: Dispatch<SetStateAction<string | number>>;
}
const Form = ({ label, state, setState }: props) => {
  // console.log(text);

  return (
    <TextField
      value={state}
      id='standard-search'
      label={label}
      type='search'
      variant='standard'
      onChange={(e) => setState(e.target.value)}
      fullWidth
    />
  );
};

export default Form;
