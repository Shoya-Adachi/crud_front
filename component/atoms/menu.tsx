import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import axios from 'axios';

export interface OptionType {
  label: string;
  onClick: () => void;
}

export interface OptionProps {
  options: OptionType[];
}

const ITEM_HEIGHT = 48;

const LongMenu = (data) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickDelete = (id: number) => {
    axios.delete(`http://127.0.0.1:3001/users/${id}`);
    window.location.reload();
  };

  const router = useRouter();

  return (
    <div>
      <IconButton
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 225,
          },
        }}
      >
        <MenuItem>
          <Button onClick={() => router.push(`/client/form?id=${data.id}`)}> 編集</Button>
          <Button onClick={() => router.push(`/client/${data.id}`)}> 詳細</Button>
          <Button onClick={clickDelete.bind(this, data.id)}>削除</Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LongMenu;
