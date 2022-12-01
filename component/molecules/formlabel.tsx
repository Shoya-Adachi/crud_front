import React, { Dispatch, SetStateAction } from 'react';
import Form from '../atoms/form';
import Grid from '@mui/material/Grid';

interface FormlabelProps {
  rows: { grid: number; label: string }[];
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const FormLabel = ({ rows, text, setText }: FormlabelProps) => {
  return (
    <Grid container columnSpacing={8}>
      {rows.map((row) => (
        <Grid item key={row.label} xs={row.grid}>
          <Form label={row.label} state={text} setState={setText} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FormLabel;
