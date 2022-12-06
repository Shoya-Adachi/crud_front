import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('名前は必須項目です。'),
  age: yup.number().required('数値を入力してください。'),
});
