import React from 'react'
import './styles/header.css'
function Header() {

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

            <header style={{ display: 'flex' }}>
                <div>
                    <div className="pfpDiv">
                        <div>
                            <button className="profilePicButton" title="Change Picture">
                                <img src={imgArr[1]} alt=""></img>
                            </button>
                        </div>
                    </div>
                </div>

                <section style={{ width: '50rem', marginLeft: '5rem' }}>
                    <div>
                        <div style={{ display: 'flex' }}>

                            {/* username */}
                            <h2>testUserDemo</h2>
                            <span className="spacingspan"></span>
                            <span><h3 font="">Edit Profile</h3></span>
                            <span className="spacingspan"></span>
                            <i class="fas fa-cog profile__icon"></i>
                            {/* modal button for settings if you want */}
                            {/* with SVG */}

                        </div>
                        <div>
                            <button>
                                <div>
                                    {/* svg goes in here */}
                                    {/* calls the Modal */}
                                    {/* Change Password */}
                                    {/* Nametag */}
                                    {/* Notification */}
                                    {/* Login Activity */}
                                    {/* Log Out */}
                                    {/* Cancel */}
                                </div>
                            </button>
                        </div>
                    </div>

                    <div>

                        {/* posts.counter after first li tag */}
                        <span>129307</span><span> posts</span>
                        <span className="spacingspan"></span>
                        {/* followers.number */}
                        <span>129307</span><span> followers</span>
                        <span className="spacingspan"></span>
                        {/* following.number */}
                        <span>129307</span><span> following</span>

                    </div>


                    <div style={{ marginTop: '1.8rem' }}>
                        {/* swap editable data setup */}
                        <h4 style={{ marginBottom: '.5rem' }}>Custom name</h4>
                        <span>Custom bio and other nonsense up to the character limit.</span>
                    </div>
                </section>
            </header>


        </>
    )
}
export default Header
