import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #777;
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  border: 2px solid #777;
  border-radius: 0.25rem;
  height: 2rem;
  font-weight: bold;
  margin: 0.25rem 0;
`;

const Input = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Input;
