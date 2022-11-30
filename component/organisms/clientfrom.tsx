import Form from '../atoms/form';
import { Dispatch, SetStateAction } from 'react';
import Grid from '@mui/material/Grid';
import SelectButton, { OptionType } from '../atoms/selectbutton';

interface StateType {
  buttonOptions: OptionType[];
  user_id: string;
  name: string;
  gender: string;
  age: number;
  setUser_Id: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>;
  setGender: Dispatch<SetStateAction<string>>;
  setAge: Dispatch<SetStateAction<number>>;
}

const ClientForm = ({
  buttonOptions,
  user_id,
  name,
  gender,
  age,
  setUser_Id,
  setName,
  setGender,
  setAge,
}: StateType) => {
  return (
    <Grid container columnSpacing={8}>
      <Grid item xs={3}>
        <Form label='ID' state={user_id} setState={setUser_Id} />
      </Grid>
      <Grid item xs={3}>
        <Form label='名前' state={name} setState={setName} />
      </Grid>
      <Grid item xs={3}>
        <SelectButton label='性別' state={gender} setState={setGender} buttonOptions={buttonOptions} />
      </Grid>
      <Grid item xs={3}>
        <Form label='年齢' state={age} setState={setAge} />
      </Grid>
    </Grid>
  );
};

export default ClientForm;
