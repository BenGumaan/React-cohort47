import useWindowSize from './Hooks/useWindowSize';
import './App.css';
import { useEffect } from 'react';

function App() {
  const windowSize = useWindowSize();

  useEffect(() => {
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    document.body.style.backgroundColor = randomColor;
  }, [windowSize]);

  return (
    <>
      <div>
        <p>
          window size is {windowSize.height}px X {windowSize.width}px
        </p>
      </div>
    </>
  );
}

export default App;