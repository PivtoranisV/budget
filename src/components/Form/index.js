import { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      date: '',
      comments: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onChangeForm(this.state.value);
    this.setState({
      value: '',
      date: '',
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
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name="value"
            type="number"
            placeholder="Amount"
            onChange={this.onChangeInput}
            value={this.state.value}
          ></input>
          <input
            name="date"
            type="date"
            onChange={this.onChangeInput}
            value={this.state.date}
          ></input>
          <textarea
            name="comments"
            type="text"
            onChange={this.onChangeInput}
            value={this.state.comments}
          ></textarea>
          <button>Save</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  onChangeForm: PropTypes.func,
};

export default Form;
