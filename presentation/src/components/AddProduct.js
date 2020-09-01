import React, {useState} from 'react';
// import { FilePond, File, registerPlugin } from 'react-filepond';
// import 'filepond/dist/filepond.min.css';
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FileBase from 'react-file-base64';

const AddProduct = () => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState(true);
    const [images, setImages] = useState([]);

    const [myImage, setMyImage] = useState('');

    const uploadImage = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(images)
        }
        const response = await fetch(`${process.env.REACT_APP_API_URL}/images`, options);
        const data = await response.json();
    }// do a single image and then multiple images

    // function to capture base64 format of an image
  const getBaseFile = (files) => {
    let imageObj = {
      imageName: "base-image-" + Date.now(),
      imageData: files.base64.toString()
    };
    setMyImage(imageObj.imageData);
    setImages(imageObj);
  }

    return (
        <div className='container'>
            <div className='add-product'>
                <form>
                    <input type='text' placeholder='Product name' value={name} onChange={({target}) => setName(target.value)} />
                    <input type='text' placeholder='Quantity' value={quantity} onChange={({target}) => setQuantity(target.value)} />
                    <input type='text' placeholder='Price' value={price} onChange={({target}) => setPrice(target.value)} />
                    <div className='is-active'>
                        <input type='checkbox' value={status} onChange={({target}) => setStatus(target.value)} />
                        <label>Product active</label>
                    </div>
                    <FileBase type="file" multiple={false} onDone={getBaseFile} />
                </form>
                <button onClick={uploadImage}>Add Product</button>
                <img width='100' src={myImage} alt="upload" />
            </div>
        </div>
    )
}

export default AddProduct;