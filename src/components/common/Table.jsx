import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  thead {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #777;
    margin-bottom: 0.5rem;
  }
  th,
  td {
    text-align: left;
    padding: 0.5rem 0;
  }
  td {
  }
  tbody tr {
    border-bottom: 1px solid #eee;
  }
`;

const Table = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export default Table;
