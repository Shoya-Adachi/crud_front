import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const ClientShow = () => {
  const router = useRouter();
  const { id } = router.query;
  // console.log({ id });

  type ClientType = {
    name: string;
    gender: string;
    age: number;
  };
  
  const [clientData, setClientData] = useState<ClientType | null>({ name: '', gender: '', age: 0 });

  const getClient = async () => {
    const res = await axios.get(`http://127.0.0.1:3001/users/${id}`);
    // console.log(res.data);
    return setClientData(res.data);
  };

  useEffect(() => {
    getClient();
    console.log(clientData);
  }, []);

  return (
    <Grid container direction='column' justifyContent='space-evenly' alignItems='center' textAlign='center'>
      <Grid item xs={12}>
        <h1>顧客詳細</h1>
      </Grid>
      <Grid item xs={12}>
        <p>名前：{clientData.name}</p>
      </Grid>
      <Grid item xs={12}>
        <p>性別：{clientData.gender}</p>
      </Grid>
      <Grid item xs={12}>
        <p>年齢：{clientData.age}</p>
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

export default ClientShow;
