import SimpleButton from '../atoms/button';
import Title from '../atoms/title';
import FormLabel from '../molecules/formlabel';
import TablePagenation from '../organisms/itemtablepage';
import { Box } from '@mui/system';
import { RowType } from '../atoms/itemtable';
import { ListType } from '../atoms/table';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ItemMain = () => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);

  const formGroup = [
    { grid: 3, label: '商品コード' },
    { grid: 3, label: '商品' },
    { grid: 3, label: '単価' },
  ];
  const header: ListType[] = [{ name: '商品コード' }, { name: '商品名' }, { name: '単価（円）' }, { name: '' }];

  const [itemData, setItemData] = useState<RowType[]>([]);

  const getItem = async () => {
    const params = {
      page: page,
    };

    const res = await axios.get('http://127.0.0.1:3001/itme_lists', { params });
    return setItemData(res.data);
  };

  useEffect(() => {
    getItem();
  }, [page]);

  return (
    <Box sx={{ mx: 5, my: 5 }}>
      <Title label='商品一覧' />
      <Button
        onClick={() => {
          router.back();
        }}
      >
        顧客一覧
      </Button>
      <Box sx={{ display: 'flex', flexDirection: 'row-reverse', mt: 4 }}>
        <SimpleButton
          variant={'contained'}
          fontSize={30}
          size={'large'}
          label='新規登録'
          onClick={() => {
            router.push('form');
          }}
        />
      </Box>
      <Box sx={{ mx: 10, mt: 4 }}>
        <FormLabel rows={formGroup} />
      </Box>
      <Box sx={{ mx: 'auto', mt: 5, maxWidth: 'auto' }}>
        <TablePagenation itemData={itemData} header={header} page={page} setPage={setPage} />
      </Box>
    </Box>
  );
};

export default ItemMain;
