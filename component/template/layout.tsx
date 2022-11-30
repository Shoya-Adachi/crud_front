import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouter } from 'next/router';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newVe: number) => {
    setValue(newVe);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label='nav tabs example'>
        <Tab label='商品一覧' value={1} />
        <Tab label='顧客一覧' value={2} />
      </Tabs>
      {children}
    </Box>
  );
};

export default Layout;
