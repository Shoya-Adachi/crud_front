import React from 'react';
import Tables from '../atoms/itemtable';
import BasicPagination from '../atoms/pagenation';
import { Box } from '@mui/system';
import { TableProps } from '../atoms/itemtable';
import { PageType } from '../atoms/pagenation';

type types = TableProps & PageType;

const TablePagenation = ({ itemData, header, page, setPage }: types) => {
  return (
    <>
      <Tables itemData={itemData} header={header} />
      <Box sx={{ mt: 2 }}>
        <BasicPagination page={page} setPage={setPage} />
      </Box>
    </>
  );
};

export default TablePagenation;
