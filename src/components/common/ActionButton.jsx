import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  opacity: 0.5;
  margin: 0 0.25rem;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  img {
    height: 1.5rem;
    margin-bottom: -0.2rem;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 1;
  }
`;

const ActionButton = ({ onClick = null, imgSrc, alt }) => {
  return (
    <StyledButton title={alt} onClick={onClick}>
      <img src={imgSrc} alt={alt} />
    </StyledButton>
  );
};

export default ActionButton;
