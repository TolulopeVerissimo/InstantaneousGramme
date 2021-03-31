import React, { useState, useEffect, useRef } from 'react'
import splash1 from './images/splash1.jpg'
import splash2 from './images/splash2.jpg'
import splash3 from './images/splash3.jpg'
import splash4 from './images/splash4.jpg'
export default function RotatingImage() {
  let imgArr =
        [
            splash1,
            splash2,
            splash3,
            splash4
        ]
  function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
  }
  let [num, setNum] = useState(0)
  useInterval(() => {
      if (num === imgArr.length) {
          setNum(0)
      }
      setNum(num = (num + 1) % imgArr.length)
  }, 4000)
  return (
    <div className="MyTurn" style={{ backgroundImage: `url(${imgArr[num]})` }}>
    </div>
  )
}
