import React, { cloneElement, ReactElement, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';

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
  user_id: string;
  name: string;
  age: number;
  gender: string;
  children?: ReactNode;
}
export interface TableProps {
  children?: ReactElement;
  clientData: RowType[];
  header: ListType[];
}

const Tables = ({ clientData, header, children }: TableProps) => {
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
          {clientData?.map((data, i) => (
            <TableRow key={i}>
              <TableCell align='center'>{data.user_id}</TableCell>
              <TableCell align='center'>{data.name}</TableCell>
              <TableCell align='center'>{data.gender}</TableCell>
              <TableCell align='center'>{data.age}</TableCell>
              <TableCell align='center'>{cloneElement(children, { id: data.id })}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
