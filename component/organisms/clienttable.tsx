import React, { useState } from 'react';
import Tables from '../atoms/table';
import BasicPagination from '../atoms/pagenation';
import { Box } from '@mui/system';
import { RowType, ListType } from '../atoms/table';
import { PageType } from '../atoms/pagenation';
import { useRouter } from 'next/router';
import LongMenu from '../atoms/menu';

type types = TableProps & PageType;

interface TableProps {
  clientData: RowType[];
  header: ListType[];
}

const ClientTable = ({ clientData, header, page, setPage, maxPage }: types) => {
  const router = useRouter();

  return (
    <>
      <Tables clientData={clientData} header={header}>
        <LongMenu />
      </Tables>
      <Box sx={{ mt: 2 }}>
        <BasicPagination page={page} setPage={setPage} maxPage={maxPage} />
      </Box>
    </>
  );
};

export default ClientTable;
