import { useEffect, useState } from 'react';

function SaveIntoLocalStorage() {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem('state')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('state', JSON.stringify(state));
  }, [state]);
  return [state, setState];
}

export default SaveIntoLocalStorage;
