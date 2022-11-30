import React from 'react';
import Button from '@mui/material/Button';

export interface props {
  label: string;
  onClick?: () => void;
}

const SimpleButton = ({ label, onClick }: props) => {
  return <Button onClick={onClick}>{label}</Button>;
};

export default SimpleButton;
