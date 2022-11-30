import React from 'react';
import Typography from '@mui/material/Typography';

interface props {
  label: string;
}

const Title = ({ label }: props) => {
  return (
    <Typography variant='h1' fontSize={40}>
      {label}
    </Typography>
  );
};
export default Title;
