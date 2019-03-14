import React from 'react';
import styled from 'styled-components';

const LoadingDiv = styled.div`
  position: absolute;
  text-align: center;
  top: 6.75rem;
  left: calc(50% - 5rem);
  width: 10rem;
  img {
    width: 100%;
    height: 5rem;
  }
  z-index: 1000;
`;

const LoadingNotify = () => {
  return (
    <LoadingDiv className="loading">
      <img src="/loading.svg" alt="Loading data..." />
    </LoadingDiv>
  );
};
export default LoadingNotify;
