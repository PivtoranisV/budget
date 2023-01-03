import Transaction from '../Transaction';

const Transactions = ({ transactions }) =>
  transactions.map((transaction) => (
    <Transaction key={transaction.id} transaction={transaction} />
  ));

export default Transactions;
