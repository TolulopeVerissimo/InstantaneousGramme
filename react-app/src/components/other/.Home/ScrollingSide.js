import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/ScrollingSide.css'

function ScrollingSide() {

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
            {/* remove marginTop if Stories is a no go. */}
            <div className="ScrollingSide" style={{ flexDirection: 'column', paddingBottom: '24800px', paddingTop: '0px', marginRight: '20.2rem', marginTop: '14.1rem' }}>
                <article className="imagesToBe">
                    <header className="zeHead">
                        <div className="HighlightedOuterCircle">
                            <div>
                                {/* <canvas class="circleforPicture">

                                        </canvas> */}
                                <span className="Pfp">
                                    {/* <img src={imgArr[0]}></img> */}
                                </span>
                            </div>
                        </div>

                        <div className="PhotoEllipses">
                            {/* <button style={{
                                        marginRight: '5rem', border: '', height: '100px',
                                        background: 'none'
                                    }}>
                                        <svg height="6" width="6">
                                            <circle cx="3" cy="3" r="1.5" stroke="black" stroke-width="3" fill="black" />
                                        </svg>
                                        <div class="divide" />
                                        <svg height="6" width="6">
                                            <circle cx="3" cy="3" r="1.5" stroke="black" stroke-width="3" fill="black" />
                                        </svg>
                                        <div class="divide" />
                                        <svg height="6" width="6">
                                            <circle cx="3" cy="3" r="1.5" stroke="black" stroke-width="3" fill="black" />
                                        </svg>
                                    </button> */}
                        </div>

                    </header>
                    <div className="actualImage">
                        <img src={imgArr[1]}></img>
                    </div>
                    <div className="CommentsBlock" style={{ width: '612px' }}>


                        <section className="commentVotes">
                            {/* 4 spans for the icons in grid display */}
                            <span className="likeButton">
                                <span className="spacer"></span>
                                <button>
                                    <svg aria-label="Like" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                </button>
                            </span>
                            <span className="commentsRedirect">
                                <span className="spacer" ></span>
                                <button>
                                    <svg aria-label="Comment" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                                </button>
                            </span>
                            <span className="shareDMs">
                                <span className="spacer" ></span>
                                <button>
                                    <svg aria-label="Share Post" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                                </button>
                            </span>
                            <span className="bookmarks">
                                <span className="spacer" style={{
                                    marginLeft: '29rem'
                                }}></span>
                                <svg aria- label="Save" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>

                            </span>
                        </section>
                        <section className="LikesNumberDisplay">
                            <div style={{ marginLeft: '1rem' }}>
                                {/* change anchor into Modal */}
                                {/* <a>{likeCount}</a> */}
                                <a>{1263} likes</a>
                            </div>
                        </section>
                        <div className="COMMENTS">
                            <div style={{ marginLeft: '1rem' }}>
                                <div>
                                    <div>
                                        {/* change anchor to NavLink */}
                                        {/* add Hover Profile Modal */}
                                        <span>Account's Poster</span>
                                        <span className="spacer" ></span>
                                        <span>Test Caption goes here</span>
                                        {/* <a>{username}</a> */}
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {/* viewAllComment is a Modal of the post with the picture and comments on the side. */}
                                        <span className="viewAllComments"></span>


                                        <span>Follower's Name 1</span>
                                        <span className="spacer" ></span>
                                        <span className="postComment1"> Follower Comment 1
                                                <span className="spacerHEARTS" ></span>
                                            <button>
                                                <svg aria-label="Like" class="_8-yf5 " fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                            </button>
                                        </span>
                                        <br />
                                        <span>Follower's Name 2</span>
                                        <span className="spacer" ></span>
                                        <span className="postComment2">
                                            Follower Comment 2
                                                    <span className="spacerHEARTS" ></span>
                                            <button>
                                                <svg aria-label="Like" class="_8-yf5 " fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                            </button>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="timestamp" style={{ height: '2.8rem', width: '610px' }}>
                            <div>
                                <br />
                                <span style={{ marginLeft: '0.8rem' }}>3 days remaining</span>
                                {/* <span style={{ marginLeft: '0.8rem', marginTop: '16px' }}>{timestamp}</span> */}
                            </div>
                        </div>
                        <div className="enterComment" style={{ border: 'solid 1px grey' }}>
                            <span>

                                <form style={{ height: '50px', width: '609px', border: 'solid 1px grey' }}>
                                    <svg style={{ marginLeft: '0.8rem', marginRight: '1rem', marginTop: '0.8rem' }} aria-label="Emoji" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
                                    <input style={{ background: 'none', border: 'none', marginBottom: '.8rem' }}
                                        size="68"
                                        placeholder="Add a comment..." />
                                    <button class="postComment" type="submit" disabled="" style={{ background: 'none', border: 'none', marginLeft: '0.8rem' }}>Post</button>
                                </form>

                            </span>


                        </div>
                    </div>


                </article>
            </div>

        </>
    )
}
export default ScrollingSide