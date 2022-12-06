import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../schema/formSchema';

interface ClientType {
  user_id: string;
  name: string;
  gender: string;
  age: number;
}

const defaultValues: ClientType = { user_id: '', name: '', gender: '女性', age: null };

const Form = () => {
  const router = useRouter();
  const { id = '' } = router.query;

  const getClient = async () => {
    const res = await axios.get(`http://127.0.0.1:3001/users/${id}`);
    // console.log(res.data);
    const apiData: ClientType = res.data;
    return (
      setValue('user_id', apiData?.user_id),
      setValue('name', apiData?.name),
      setValue('gender', apiData?.gender),
      setValue('age', apiData?.age)
    );
  };

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ClientType>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const formSubmitHandler = (data: ClientType) => {
    if (!!id) {
      axios.put(`http://127.0.0.1:3001/users/${id}`, data);
    } else {
      axios.post(`http://127.0.0.1:3001/users/${id}`, data);
      // console.log(data)
    }

    router.push('/client/list');
  };

  useEffect(() => {
    getClient();
  });

  return (
    <>
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
            <h1>{!id ? '新規登録画面' : '編集画面'}</h1>
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name='user_id'
              render={({ field }): JSX.Element => <TextField {...field} label='ID' variant='outlined' />}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              control={control}
              name='name'
              render={({ field }): JSX.Element => (
                <TextField
                  {...field}
                  label='名前'
                  variant='outlined'
                  error={!!errors.name}
                  helperText={errors.name && errors.name.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              control={control}
              name='gender'
              render={({ field }): JSX.Element => (
                <FormControl>
                  <FormLabel>性別</FormLabel>
                  <RadioGroup {...field}>
                    <FormControlLabel label='女性' value='女性' control={<Radio />} />
                    <FormControlLabel label='男性' value='男性' control={<Radio />} />
                    <FormControlLabel label='他の' value='他の' control={<Radio />} />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              control={control}
              name='age'
              render={({ field }): JSX.Element => (
                <TextField
                  {...field}
                  label='年齢'
                  variant='outlined'
                  error={!!errors.age}
                  helperText={errors.age && errors.age.message}
                />
              )}
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
    </>
  );
};

export default Form;
