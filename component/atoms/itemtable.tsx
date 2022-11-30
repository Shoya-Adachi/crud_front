import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// Todo
// headerの型を定義？
export interface ListType {
  name: string;
}

// tableのBodyの型を定義
export interface RowType {
  id: number;
  code: string;
  name: string;
  cost: number;
  children?: React.ReactChild;
}
export interface TableProps {
  itemData: RowType[];
  header: ListType[];
}
const clickDelete = (id: number) => {
  axios.delete(`http://127.0.0.1:3001/itme_lists/${id}`);
  window.location.reload();
};

const ItemTables = ({ itemData, header }: TableProps) => {
  const router = useRouter();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, maxWidth: 'auto' }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            {header.map((list) => (
              <StyledTableCell key={list.name} align='center'>
                {list.name}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {itemData.map((data, i) => (
            <TableRow key={i}>
              <TableCell align='center'>{data.code}</TableCell>
              <TableCell align='center'>{data.name}</TableCell>
              <TableCell align='center'>{data.cost}</TableCell>
              <TableCell align='center'>
                <Button onClick={() => router.push(`/item/form?id=${data.id}`)}> 編集</Button>
                <Button onClick={() => router.push(`/item/${data.id}`)}> 詳細</Button>
                <Button onClick={clickDelete.bind(this, data.id)}>削除</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemTables;
