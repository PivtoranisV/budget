import { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { Input } from './styles';
import { Button } from './styles';
import { Comment } from './styles';
import { Row } from './styles';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      date: new Date().toISOString().slice(0, 10),
      comments: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onChangeForm(this.state);
    this.setState({
      value: '',
      comments: '',
    });
  };

  onChangeInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.onSubmit}>
          <Row>
            <Input
              name="value"
              type="number"
              placeholder="Amount"
              onChange={this.onChangeInput}
              value={this.state.value}
            ></Input>
            <Input
              name="date"
              type="date"
              onChange={this.onChangeInput}
              value={this.state.date}
            ></Input>
          </Row>
          <Row>
            <Button>Save</Button>
            <Comment
              name="comments"
              type="text"
              onChange={this.onChangeInput}
              value={this.state.comments}
            ></Comment>
          </Row>
        </form>
      </Wrapper>
    );
  }
}

Form.propTypes = {
  onChangeForm: PropTypes.func,
};

export default Form;
