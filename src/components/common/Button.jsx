import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #777;
  color: white;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  /* border: 2px solid #777; */
  border: none;
  border-radius: 0.25rem;
  font-weight: bold;
  margin: 0.25rem 0;
  cursor: pointer;
  &:hover {
    background: #4acaa8;
  }
  &:focus {
    outline: none;
  }
`;

const Input = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Input;
