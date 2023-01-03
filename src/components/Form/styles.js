import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ value }) => (value < 0 ? '#e2e1e1' : '#fff')};
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border-radius: 3px;
  padding: 0 5px;
  min-width: 80px;
  margin: 0 10px 3px 0;
  border: 1px solid #dbdbdb;
  height: 40px;
  outline: none;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 3px;
  padding: 0 21px;
  width: 150px;
  margin-right: 10px;
  border: 1px solid #dbdbdb;
  height: 40px;
  outline: none;
  background-color: #e0e0e0;
  color: rgba(0, 0, 0, 0.87);
  font-size: 18px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }
`;

export const Comment = styled.textarea`
  border-radius: 3px;
  line-height: 1.5;
  padding: 5px;
  width: 130px;
  margin: 0px;
  border: 1px solid #dbdbdb;
  min-height: 40px;
  height: 40px;
  outline: none;
  box-sizing: border-box;
`;
