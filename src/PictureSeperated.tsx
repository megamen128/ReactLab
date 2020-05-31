import React, { useState, ChangeEvent, useEffect, useMemo, useCallback, useContext } from 'react'
import { PictureContext } from './PictureContext';

interface Props {
    imgScr: Array<string>;
    altText: string;
}

export const PictureSeperated: React.FC<Props> = (props) => {
    const {pictureIndex}= useContext(PictureContext);
    return (
        <div>
            <p>Zdjecie nr: {pictureIndex}</p>
            <img src={props.imgScr[pictureIndex]} alt="" />
        </div>
    )
}

