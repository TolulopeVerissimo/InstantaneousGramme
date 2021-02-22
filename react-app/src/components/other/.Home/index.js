import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Carousel.css'
import ScrollingSide from './ScrollingSide.js'
import StationarySide from './StationarySide.js'
function Home() {
    let imgArr =
        [
            "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F034%2F408%2FPunching_Pepe_Banner.jpg",
            "https://i.imgflip.com/4howsd.jpg",
            "https://i.kym-cdn.com/photos/images/newsfeed/001/591/675/a27.png",
            "https://starecat.com/content/wp-content/uploads/pope-francis-punch-man-with-damaged-face-photoshopped.jpg",
            "https://i.kym-cdn.com/entries/icons/original/000/027/269/Screen_Shot_2018-09-28_at_3.14.37_PM.png"
        ]
    return (
        <>
            {/* <form encType="multitype/form-data" method="POST" role="presentation">
                <input accept="image/jpeg" type="file" />
            </form> */}
            <section>
                <main>
                    <div className="Carousel">
                        <ScrollingSide />
                    </div>
                    <div className="StationarySide">

                    </div>
                </main>
            </section>
        </>

    )
}
export default Home