import styled from 'styled-components';

const DataListViewContainer = styled.section`
  .contacted span {
    font-size: 80%;
    color: crimson;
    font-weight: normal;
    padding-left: 1rem;
  }
  [data-contact-stale='true'] {
    color: crimson;
  }
  .control {
    /* position: relative; */
    opacity: 0.5;
    margin: 0 0.25rem;
    padding: 0;
    background: transparent;
    vertical-align: baseline;
    /* line-height: 1.5rem; */
    img {
      height: 1.5rem;
      margin-bottom: -0.2rem;
    }
  }
  .control:hover {
    opacity: 1;
  }
  .list-item {
    background: #f4f4f4;
    margin-bottom: 0.5rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .list-item:hover {
    background: #eee;
  }
  .donor-name {
    width: 25%;
  }
  .donor-contributions {
    width: 15%;
  }
  .donor-contact {
    width: 30%;
    overflow: hidden;
  }
  .donor-last-contact {
    width: 20%;
  }
  .controls {
    /* width: %; */
  }
`;

export default DataListViewContainer;
