import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';

interface ItemType {
  code: string;
  name: string;
  cost: number | string;
}

const defaultValues: ItemType = { code: '', name: '', cost: '' };

const Form = () => {
  const router = useRouter();
  const { id = '' } = router.query;

  const getItem = async () => {
    const res = await axios.get(`http://127.0.0.1:3001/itme_lists/${id}`);
    // console.log(res.data);
    const apiData: ItemType = res.data;
    return setValue('code', apiData?.code), setValue('name', apiData?.name), setValue('cost', apiData?.cost);
  };

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: defaultValues,
  });

  const formSubmitHandler = (data: ItemType) => {
    if (!!id) {
      axios.put(`http://127.0.0.1:3001/itme_lists/${id}`, data);
    } else {
      axios.post(`http://127.0.0.1:3001/itme_lists/${id}`, data);
    }

    router.push('/item/list');
  };

  useEffect(() => {
    getItem();
  });

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <Grid
        container
        direction='column'
        justifyContent='space-evenly'
        alignItems='center'
        textAlign='center'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
      >
        <Grid item xs={12}>
          <h1>登録画面</h1>
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name='code'
            render={({ field }): JSX.Element => <TextField {...field} label='ID' variant='outlined' />}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name='name'
            render={({ field }): JSX.Element => <TextField {...field} label='名前' variant='outlined' />}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name='cost'
            render={({ field }): JSX.Element => <TextField {...field} label='単価' variant='outlined' />}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type='submit'>登録</Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => {
              router.back();
            }}
          >
            戻る
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
