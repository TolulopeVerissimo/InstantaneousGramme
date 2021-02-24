import React, { useState, useEffect, useRef } from 'react'
export default function RotatingImage() {
  let imgArr =
        [
            "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F034%2F408%2FPunching_Pepe_Banner.jpg",
            "https://i.imgflip.com/4howsd.jpg",
            "https://i.kym-cdn.com/photos/images/newsfeed/001/591/675/a27.png",
            "https://starecat.com/content/wp-content/uploads/pope-francis-punch-man-with-damaged-face-photoshopped.jpg",
            "https://i.kym-cdn.com/entries/icons/original/000/027/269/Screen_Shot_2018-09-28_at_3.14.37_PM.png"
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
