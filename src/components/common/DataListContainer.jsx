// import React from 'react';
import styled from 'styled-components';

const DataListItem = styled.div`
  & > div {
    background: #f4f4f4;
    margin-bottom: 0.5rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    position: relative;
    &:hover {
      background: #eee;
    }
  }
`;

export default DataListItem;
