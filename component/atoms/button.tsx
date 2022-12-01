import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface props {
  label: string;
  size: 'small' | 'large' | 'medium';
  fontSize: number;
  variant: 'text' | 'outlined' | 'contained';
  onClick?: () => void;
}

const SimpleButton = ({ label, size, fontSize, variant, onClick }: props) => {
  return (
    <Button variant={variant} onClick={onClick} size={size}>
      <Typography fontSize={fontSize}>{label}</Typography>
    </Button>
  );
};

export default SimpleButton;
