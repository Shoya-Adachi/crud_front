import React, { Dispatch, SetStateAction } from 'react';
import Pagination from '@mui/material/Pagination';

export interface PageType {
  page: number;
  maxPage: number;
  // handleChangePage: (a,c) => void(a,v);
  setPage: Dispatch<SetStateAction<number>>;
}
const BasicPagination = ({ page, setPage, maxPage }: PageType) => {
  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value);
    setPage(value);
  };

  return <Pagination color='primary' count={maxPage} page={page} onChange={handleChangePage} />;
};

export default BasicPagination;
