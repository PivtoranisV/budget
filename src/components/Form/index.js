import { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Input, Button, Comment, Row } from './styles';

const Form = (props) => {
  const [form, setForm] = useState({
    value: '',
    date: new Date().toISOString().slice(0, 10),
    comments: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    props.onChangeForm(form);

    setForm({
      ...form,
      value: '',
      comments: '',
    });
  };

  const onChangeInput = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <Row>
          <Input
            name="value"
            type="number"
            placeholder="Amount"
            onChange={onChangeInput}
            value={form.value}
          ></Input>
          <Input
            name="date"
            type="date"
            onChange={onChangeInput}
            value={form.date}
          ></Input>
        </Row>
        <Row>
          <Button>Save</Button>
          <Comment
            name="comments"
            type="text"
            onChange={onChangeInput}
            value={form.comments}
          ></Comment>
        </Row>
      </form>
    </Wrapper>
  );
};

Form.propTypes = {
  onChangeForm: PropTypes.func,
};

export default Form;
