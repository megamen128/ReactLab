import React, { useState } from 'react'

interface Props {
    imgScr: Array<string>;
    altText: string;
}
export const Picture: React.FC<Props> = (props) => {
    const [pictureIndex, setPictures] = useState(0);
    
    const changeImageHandler = ( i:number)=>{
        setPictures(i);
      }
    let images = props.imgScr.map( (image,i) =>{
        return <li onClick={ () => changeImageHandler(i)}>{image}</li>
    })
    return (
        <div>
            <img src={props.imgScr[pictureIndex]} alt="" />
            <ul>{images}</ul>
        </div>
    )
}

