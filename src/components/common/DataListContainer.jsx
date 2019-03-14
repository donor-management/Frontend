// import React from 'react';
import styled from 'styled-components';

const DataListItem = styled.div`
  & > div {
    background: #f4f4f4;
    margin-bottom: 0.75rem;
    border-radius: 0.5rem;
    position: relative;
    box-shadow: 2px 2px 5px #ddd;
    &:hover {
      background: #eee;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default DataListItem;
