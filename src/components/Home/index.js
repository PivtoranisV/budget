import { useState } from 'react';
import Balance from '../Balance';
import Form from '../Form';
import Transactions from '../Transactions';
import { Wrapper } from './styles';

let id = 0;

const Home = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const onChangeForm = ({ value, date, comments }) => {
    setBalance((prevBalance) => prevBalance + Number(value));

    setTransactions((prevTransactions) => [
      ...prevTransactions,
      {
        value: +value,
        comments,
        date,
        id: ++id,
      },
    ]);
  };

  return (
    <Wrapper>
      <Balance balance={balance} />
      <Form onChangeForm={onChangeForm} />
      <hr />
      <Transactions transactions={transactions} />
    </Wrapper>
  );
};

export default Home;
