import React from 'react';
import './ImageList.css';
import Imagecard from './Imagecard';

const ImageList = (props) => {
const images = props.images.map((image)=> {
    //implement keys in list
    return <Imagecard key={image.id} image={image} />
});

    return <div className="image-list">{images}</div>
}

export default ImageList;