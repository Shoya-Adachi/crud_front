import React from 'react';
import Tables from '../atoms/table';
import BasicPagination from '../atoms/pagenation';
import { Box } from '@mui/system';
import { TableProps } from '../atoms/table';
import { PageType } from '../atoms/pagenation';

type types = TableProps & PageType;

const TablePagenation = ({ clientData, header, page, setPage, maxPage }: types) => {
  return (
    <>
      <Tables clientData={clientData} header={header} />
      <Box sx={{ mt: 2 }}>
        <BasicPagination page={page} setPage={setPage} maxPage={maxPage} />
      </Box>
    </>
  );
};

export default TablePagenation;
