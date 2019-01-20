import React, { useState, useEffect, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { theme } from '../ThemeContext';

export default () => {
  const globalTheme = useContext(theme);
  console.log('theme', globalTheme);
  const [counter, setCounter] = useState(0);
  const width = useWindowWidth();

  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  });

  return (
    <div className={globalTheme}>
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
      <Divider />
      <p> Screen Width is {width}</p>
    </div>
  );
};

// customHook, just extracting a useEffect in a function
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}
