import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface srcProps {
  url: string;
  alt: string;
  name: string;
  text: string;
  label: string;
}

export default function MediaCard({ url, alt, name, text, label }: srcProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Image src={url} alt={alt} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>{label}</Button>
      </CardActions>
    </Card>
  );
}
