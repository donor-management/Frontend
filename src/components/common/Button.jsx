import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #5c6ac4;
  color: white;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: bold;
  margin: 0.25rem 0;
  cursor: pointer;
  &:hover {
    background: #777;
  }
  &:focus {
    outline: none;
  }
`;

const Input = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Input;
