import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  background: ${({ value }) => (value < 0 ? '#e2e1e1' : '#fff')};
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
  margin: 10px;
`;
