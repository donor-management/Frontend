import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-bottom: 0.5rem;
  label {
    display: block;
    padding: 0.25rem 0;
  }
  select {
    padding: 0.5rem 0.5rem;

    font-size: 0.75rem;
    border: 2px solid #777;
    border-radius: 0.25rem;
    background: white;
  }
  select::placeholder {
    font-style: italic;
    color: #999;
  }
  select:focus {
    border: 2px solid #4acaa8;
    outline: none;
  }
  option {
    color: red;
    padding: 1rem;
  }
  .form-error {
    font-size: 0.75em;
    color: crimson;
    padding: 0.25rem;
  }
`;

const Select = ({ name, value, options = [], label, placeholder, error, ...rest }) => {
  return (
    <StyledDiv className="form-group">
      <label htmlFor={name}> {label} </label>
      <select name={name} value={value} defaultValue={''} {...rest}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value} label={option.label}>
              {option.label}
            </option>
          );
        })}
      </select>
    </StyledDiv>
  );
};

export default Select;
