import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

export default () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // similar to componentDidMount and componentDidUpdate
    document.title = `You clicked ${counter} times`;
  });
  return (
    <div>
      <h2>{counter}</h2>
      <Button
        style={{ margin: 20 }}
        variant="outlined"
        onClick={() => setCounter(counter + 1)}
      >
        Add one
      </Button>
      <Button
        style={{ margin: 20 }}
        variant="outlined"
        onClick={() => setCounter(0)}
      >
        Reset
      </Button>
    </div>
  );
};
