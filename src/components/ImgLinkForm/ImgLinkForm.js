import React from 'react';

const ImgLinkForm = ({onInputChange, onBtnSubmit}) => {
    return (
        <div>
            <p className='f4'>
            {"This program will detect faces in the picture, try one!"}
            </p>
            
            <input className="pa2 w-20 f4 center" onChange={onInputChange}/>
            <button className="f4 grow link pa2 w-10 ph3 pv2 bg-light-purple dib white" onClick={onBtnSubmit}>Detect</button>
        </div>

    )

}
export default ImgLinkForm;
