import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Test = () => {
  const router = useRouter();
  const { id } = router.query;
  // console.dir(router.query);

  type ItemType = {
    name: string;
    cost: number;
  };

  const [itemData, setItemData] = useState<ItemType | null>({ name: '', cost: 0 });

  const getItem = async () => {
    const res = await axios.get(`http://127.0.0.1:3001/itme_lists/${id}`);
    // console.log(res.data);
    return setItemData(res.data);
  };

  useEffect(() => {
    getItem();
    console.log(itemData);
  }, []);

  return (
    <Grid container direction='column' justifyContent='space-evenly' alignItems='center' textAlign='center'>
      <Grid item xs={12}>
        <h1>商品詳細</h1>
      </Grid>
      <Grid item xs={12}>
        <p>名前：{itemData.name}</p>
      </Grid>
      <Grid item xs={12}>
        <p>単価：{itemData.cost}（円）</p>
      </Grid>
      <Button
        onClick={() => {
          router.back();
        }}
      >
        戻る
      </Button>
    </Grid>
  );
};

export default Test;
