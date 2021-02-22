import React from 'react'
function PicGrid() {
    const pictures = ""
    return (
        <div>
            {
                pictures && pictures.map(el => {
                    return (
                        <img key={el.id} className="picture" src={el.imagePath} alt={el.name} />
                    )
                })
            }
        </div>
    )
}
export default PicGrid
