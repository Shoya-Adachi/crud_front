import React from 'react';
import Typography from '@mui/material/Typography';

interface props {
  label: string;
}

// 親コンポーネントから、[label]で題名を指定させる
const Title = ({ label }: props) => {
  return (
    <Typography variant='h1' fontSize={40}>
      {label}
    </Typography>
  );
};
export default Title;
