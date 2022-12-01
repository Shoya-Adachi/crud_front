import SimpleButton from '../atoms/button';
import Title from '../atoms/title';
import TablePagenation from '../organisms/clienttable';
import { Box } from '@mui/system';
import { RowType } from '../atoms/table';
import { ListType } from '../atoms/table';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ClientForm from '../organisms/clientfrom';
import { OptionType } from '../../component/atoms/selectbutton';

const ClientMain = () => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [user_id, setUser_Id] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [age, setAge] = useState<number>();

  // テーブルのカラム名
  const header: ListType[] = [{ name: 'ID' }, { name: '名前' }, { name: '性別' }, { name: '年齢' }, { name: '' }];

  // 性別検索フォームの選択肢　option:選択肢のラベル名
  const buttonOptions: OptionType[] = [
    { value: '男性', option: '男性' },
    { value: '女性', option: '女性' },
    { value: '他の', option: '他の' },
  ];

  const [clientData, setClientData] = useState<RowType[]>([]);
  const [maxPage, setMaxPage] = useState<number>(0);

  // getClient => axios.get:apiを叩き、[ページごとのデータ] & [最大ページ数]を取得
  const getClient = async () => {
    const params = {
      page: page,
      user_id: user_id,
      name: name,
      gender: gender,
      age: age,
    };

    const res = await axios.get('http://127.0.0.1:3001/users', { params });
    setClientData(res?.data?.data);
    setMaxPage(res?.data?.maxPage);
  };

  useEffect(() => {
    getClient();
  }, [page]);

  console.log(clientData);

  // serchClient => 検索フォーム内の値を取得し、変化するたびにその値を含むデータを持ってくる
  const serchClient = async () => {
    const params = {
      page: page,
      user_id: user_id,
      name: name,
      gender: gender,
      age: age,
    };
    const res = await axios.get('http://127.0.0.1:3001/serch', { params });
    setClientData(res?.data?.data);
    setMaxPage(res?.data?.maxPage);
  };

  useEffect(() => {
    serchClient();
  }, [user_id, name, gender, age]);

  return (
    <Box sx={{ mx: 5, my: 5 }}>
      <Title label='顧客一覧' />
      <Button
        onClick={() => {
          router.push('/item/list');
        }}
      >
        商品一覧
      </Button>
      <Box sx={{ display: 'flex', flexDirection: 'row-reverse', mt: 4 }}>
        {/* SimpleButton => 新規登録画面へ遷移するためのコンポーネント */}
        <SimpleButton
          label='新規登録'
          size={'large'}
          fontSize={30}
          variant={'outlined'}
          onClick={() => {
            router.push('/client/form');
          }}
        />
      </Box>
      <Box sx={{ mx: 10, mt: 4 }}>
        {/* ClientForm => 検索フォーム */}
        <ClientForm
          user_id={user_id}
          name={name}
          gender={gender}
          age={age}
          setUser_Id={setUser_Id}
          setName={setName}
          setGender={setGender}
          setAge={setAge}
          buttonOptions={buttonOptions}
        />
      </Box>
      <Box sx={{ mx: 'auto', mt: 5, maxWidth: 'auto' }}>
        {/* TablePagenation => テーブルリスト */}
        <TablePagenation maxPage={maxPage} clientData={clientData} header={header} page={page} setPage={setPage} />
      </Box>
    </Box>
  );
};

export default ClientMain;
