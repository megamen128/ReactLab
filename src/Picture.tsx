import React, { useState, ChangeEvent, useEffect, useMemo, useCallback } from 'react'

interface Props {
    imgScr: Array<string>;
    altText: string;
}
export const Picture: React.FC<Props> = (props) => {
    const [pictureIndex, setPicture] = useState(0);

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
            <p>Zdjecie nr: {pictureIndex}</p>
            <img src={props.imgScr[pictureIndex]} alt="" />
        </div>
    )
}

