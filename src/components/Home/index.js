import { Component } from 'react';
import Balance from '../Balance';
import Form from '../Form';
import Transactions from '../Transactions';
import { Wrapper } from './styles';

let id = 0;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions: [],
    };
    this.onChangeForm = this.onChangeForm.bind(this);
  }

  onChangeForm = (value) => {
    this.setState((prevState) => ({
      balance: prevState.balance + Number(value),
      transactions: [
        {
          value,
          label: 'Change',
          id: ++id,
        },
        ...prevState.transactions,
      ],
    }));
  };

  render() {
    return (
      <Wrapper>
        <Balance balance={this.state.balance} />
        <Form onChangeForm={this.onChangeForm} />
        <hr />
        <Transactions transactions={this.state.transactions} />
      </Wrapper>
    );
  }
}

export default Home;
