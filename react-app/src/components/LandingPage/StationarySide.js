import React from "react";
import { Link } from "react-router-dom";
import { sideItems } from "./sideItems.js";
import "./StationarySide.css";
function StationarySide() {
  let imgArr = [
    "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F034%2F408%2FPunching_Pepe_Banner.jpg",
    "https://i.imgflip.com/4howsd.jpg",
    "https://i.kym-cdn.com/photos/images/newsfeed/001/591/675/a27.png",
    "https://starecat.com/content/wp-content/uploads/pope-francis-punch-man-with-damaged-face-photoshopped.jpg",
    "https://i.kym-cdn.com/entries/icons/original/000/027/269/Screen_Shot_2018-09-28_at_3.14.37_PM.png",
  ];
  return (
    <>
      <div className='scrollingMain'>
        <div className='profileContainer'>
          <div className='testCircle'>
            <img src={imgArr[4]} alt='' />
          </div>
          <div className='username'>
            <h5>Demo_McDemerson</h5>
            <h6>Nemo</h6>
          </div>
        </div>
        <div className='suggested'>
          {imgArr &&
            imgArr.map((el, idx) => {
              return (
                <div key={idx}>
                  <div className='circle'>
                    <img src={el} alt="user profile pic"></img>
                  </div>
                  <div className='users'>
                    <h5>Suggested User {idx}</h5>
                    <h6>Follow Button</h6>
                  </div>
                </div>
              );
            })}
        </div>
        <div style={{ display: "flex", marginTop: "6rem" }}>
          <nav>
            {sideItems.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  className={item.cName}
                  id='underline'
                  to={item.path}
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ marginRight: "1rem" }}>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}

export default StationarySide;
