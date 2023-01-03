import { Wrapper } from './styles';

const Transaction = ({ transaction }) => (
  <Wrapper value={transaction.value}>
    Label: {transaction.label}
    <p>Value: {transaction.value}</p>
    <br />
  </Wrapper>
);

export default Transaction;
