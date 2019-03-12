import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  margin-bottom: 0.5rem;
  label {
    display: block;
    padding: 0.25rem 0;
  }
  input {
    padding: 0.5rem 0.5rem;
    font-size: 0.75rem;
    border: 2px solid #777;
    border-radius: 0.25rem;
  }
  input::placeholder {
    font-style: italic;
    color: #999;
  }
  input:focus {
    border: 2px solid #4acaa8;
    outline: none;
  }
  .form-error {
    font-size: 0.75em;
    color: crimson;
    padding: 0.25rem;
  }
`;

const Input = ({ type = 'text', name, label, error, ...rest }) => {
  return (
    <StyledInput className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} type={type} name={name} id={name} className="form-control" />
      {error && <div className="form-error">{error}</div>}
    </StyledInput>
  );
};

export default Input;
