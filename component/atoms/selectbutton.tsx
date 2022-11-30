import { Dispatch, SetStateAction } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export interface OptionType {
  value: string;
  option: string;
}

interface OptionProps {
  buttonOptions: OptionType[];
  label: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

const SelectButton = ({ buttonOptions, label, state, setState }: OptionProps) => {
  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };

  return (
    <div>
      <FormControl variant='standard' fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={state} onChange={(e) => setState(e.target.value)} label='Age'>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {buttonOptions.map((buttonOption, i) => (
            <MenuItem key={i} value={buttonOption.value}>
              {buttonOption.option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectButton;
