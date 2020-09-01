import React, {useState} from 'react';
import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

// FilePond.parse(window.document.body);

const AddProduct = () => {

    // const [name, setName] = useState('');
    // const [quantity, setQuantity] = useState('');
    // const [price, setPrice] = useState('');
    // const [status, setStatus] = useState(true);
    const [images, setImages] = useState([]);

    return (
        <div className='container'>
            <div className='add-product'>
                <form>
                    {/* <input type='text' placeholder='Product name' value={name} onChange={({target}) => setName(target.value)} />
                    <input type='text' placeholder='Quantity' value={quantity} onChange={({target}) => setQuantity(target.value)} />
                    <input type='text' placeholder='Price' value={price} onChange={({target}) => setPrice(target.value)} />
                    <div className='is-active'>
                        <input type='checkbox' value={status} onChange={({target}) => setStatus(target.value)} />
                        <label>Product active</label>
                    </div> */}
                    <FilePond
                        files={images}
                        onupdatefiles={setImages}
                        allowMultiple={true}
                        maxFiles={3}
                        // server="/api"
                        name="files"
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    />
                </form>
                <button onClick={(event) => console.log(images[0])}>Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct;