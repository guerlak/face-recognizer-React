import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({imageSrc, box}) =>{

    return (
        <div className='center ma'>
        <div className='image absolute mt2' >
            <img id="inputImage" alt="" width='300px' heigh="auto" src={imageSrc}/>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
        </div>
    )


}
export default FaceRecognition;