import React, { useContext, ChangeEvent, useEffect, useMemo, useCallback } from 'react'
import { PictureContext } from './PictureContext';

interface Props {
    imgScr: Array<string>;
}

export const ListSeperated: React.FC<Props> = (props) => {
    const {pictureIndex, setPicture}= useContext(PictureContext);

    const handleChange = useCallback( (event: ChangeEvent<HTMLSelectElement>) =>{
        const targedNumber = Number(event.target.value)
        setPicture(targedNumber)
    } ,[setPicture])  

    let images = useMemo( () => props.imgScr.map((image,i) => {
        return <option value={i}>{image}</option>
    }), [props.imgScr]);

    // useEffect( ()=>{
    //     const interval = setInterval(() => {
    //         var index = Math.floor(Math.random() * 5);
    //         setPicture(index);
    //     },1000);
    //     return () => clearInterval(interval);
    // },[]);
    
    return (
        <div>
            <div>
            <label>Zdjecie </label>
            <select onChange={handleChange} value={pictureIndex}>
                {images}
            </select>
            </div>
        </div>
    )
}

