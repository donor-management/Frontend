import { useState } from 'react';

const useToggle = initialState => {
  const [state, setState] = useState(initialState || false);

  const toggleState = () => {
    setState(prev => !prev);
  };

  return [state, toggleState];
};

export default useToggle;
