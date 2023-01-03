import { Wrapper } from './styles';

const Transaction = ({ transaction }) => (
  <Wrapper value={transaction.value}>
    <p>{transaction.date}</p>
    <p>{transaction.value.toFixed(2)}</p>
    <p>{transaction.comments}</p>
    <br />
  </Wrapper>
);

export default Transaction;
