import React from 'react'
import { Link } from 'react-router-dom'
import {sideItems} from './sideItems.js'
import './styles/StationarySide.css'
function StationarySide() {
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
            <div>
                <div></div>

                <div>
                    <div>
                        <div></div>
                        <a>
                            <span> See All </span>
                        </a>
                    </div>

                    <div>
                        <div>

                            <div>
                                Holding 5 Divs that all need to be nest-mapped
                                Box
                                Parent Div

                                    picture
                                    
                                    profile Link

                                    Follow
                                    {/* {
                                    userList && userList.map((el,idx)=>{
                                        return
                                        (
                                            <div className="GrandPappieOfAllDivs">
                                                <div className="ParentDivForUserSuggestions">
                                                    <div className="PfpParent">
                                                        <div className="PfpChild1">
                                                            <div className="PfpChild2">
                                                                <canvas height="42px" width="42px" style={{position: 'absolute', top: '-5px', left: '-5px', width: '42px', height: '42px'}}></canvas>
                                                                <a className="toProfile" style={{width:'32px',height:'32px'}}>
                                                                    <img src={userList.pfp} alt="" draggable="false"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="userNameText">
                                                    <div>
                                                        <div>
                                                            <span>
                                                                <a>{userList.username}</a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <button>
                                                        <span>Follow</span>
                                                    </button>
                                                </div>

                                        )
                                    })} */}
                                    
                            </div>

                        </div>

                    </div>


                </div>

                <div>
                    <nav>
                        <ul>
                            {sideItems.map((item, idx) => {
                                return (
                                    <li key={idx} className={item.cName} id="underline">
                                        <Link to={item.path} style={{ textDecoration: 'none' }}>
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>




            </div>
        </>
    )
}
export default StationarySide