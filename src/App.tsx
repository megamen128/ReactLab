import React, {useState} from 'react';
import './App.css';
import { Picture } from './Picture'
import { ListSeperated } from './ListSeperated'
import { PictureSeperated } from './PictureSeperated'
import { PictureContext } from './PictureContext';

function App() {
  const [pictureIndex, setPicture] = useState(0);
  const pictureNamesArr = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg"];
  return (
    <div className="App">
      <PictureContext.Provider value={{pictureIndex,setPicture}}>
        <PictureSeperated
          imgScr={pictureNamesArr}
          altText="">
        </PictureSeperated>
        <ListSeperated
          imgScr={pictureNamesArr}
        ></ListSeperated>
      </PictureContext.Provider>
    </div>
  );
}

export default App;
