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
    const [images, setImages] = useState('');
    const [warning, setWarning] = useState(false);
    const [warning2, setWarning2] = useState(false);
    const [myImage, setMyImage] = useState('');
    const [shirt, setShirt] = useState(false);
    const [shoes, setShoes] = useState(false);
    const [pants, setPants] = useState(false);
    const [hoodie, setHoodie] = useState(false);
    const [socks, setSocks] = useState(false);
    const [jacket, setJacket] = useState(false);

    const refresh = () => {
        setName('');
        setQuantity('');
        setPrice('')
        setStatus(true);
        setImages('');
        setWarning(false);
        setWarning2(false);
        setMyImage('');
        setShirt(false);
        setShoes(false);
        setPants(false);
        setHoodie(false);
        setSocks(false);
        setJacket(false);
    }

    const uploadImage = async () => {
        if (images === 'invalid' || images === '') {
            setWarning(true);
            return;
        }
        if (name === '' || quantity === '' || price === '') {
            setWarning2(true);
            return
        }
        setWarning2(false);
        const style = [];
        if (shirt) {style.push('shirt')}
        if (shoes) {style.push('shoes')}
        if (pants) {style.push('pants')}
        if (hoodie) {style.push('hoodie')}
        if (socks) {style.push('socks')}
        if (jacket) {style.push('jacket')}
        const product = {
            name: name,
            quantity: quantity,
            price: price,
            status: status,
            style: style,
            images: images
        }
        console.log(product);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }
        await fetch(`${process.env.REACT_APP_API_URL}/images`, options);
        refresh();
    }// do a single image and then multiple images

    // function to capture base64 format of an image
    const getBaseFile = (files) => {
        if (files.type !== 'image/jpeg') {
            setMyImage('');
            setImages('invalid');
            return;
        }
        let imageObj = {
        imageName: "base-image-" + Date.now(),
        imageData: files.base64.toString()
        };
        setWarning(false);
        setMyImage(imageObj.imageData);
        setImages(imageObj);
    }

    const handleCheck = ({target}) => {
        let update;
        switch(target.name) {
            case 'status':
                update = !status;
                setStatus(update);
                break;
            case 'shirt':
                update = !shirt;
                setShirt(update);
                break;
            case 'shoes':
                update = !shoes;
                setShoes(update);
                break;
            case 'pants':
                update = !pants;
                setPants(update);
                break;
            case 'hoodie':
                update = !hoodie;
                setHoodie(update);
                break;
            case 'socks':
                update = !socks;
                setSocks(update);
                break;
            default:
                update = !jacket;
                setJacket(update);
        }
    }

    return (
        <div className='container'>
            <div className='add-product'>
                <form>
                    <input type='text' placeholder='Product name' value={name} onChange={({target}) => setName(target.value)} />
                    <input type='text' placeholder='Quantity' value={quantity} onChange={({target}) => setQuantity(target.value)} />
                    <input type='text' placeholder='Price' value={price} onChange={({target}) => setPrice(target.value)} />
                    <div className='is-active'>
                        <input type='checkbox' name='status' checked={status} onChange={handleCheck} />
                        <label style={{color: '#7d7d7d'}}>Product active</label>
                    </div>
                    <hr />
                    <p><i>Select all that apply</i></p>
                    <div className='tags'>
                        <input type="checkbox" id="shirt" name="shirt" checked={shirt} onChange={handleCheck}/>
                        <label htmlFor="shirt"> Shirt</label>
                        <input type="checkbox" id="shoes" name="shoes" checked={shoes} onChange={handleCheck} />
                        <label htmlFor="shoes"> Shoes</label>
                        <input type="checkbox" id="pants" name="pants" checked={pants} onChange={handleCheck}/>
                        <label htmlFor="pants"> Pants</label>
                        <input type="checkbox" id="hoodie" name="hoodie" checked={hoodie} onChange={handleCheck} />
                        <label htmlFor="hoodie"> Hoodie</label>
                        <input type="checkbox" id="socks" name="socks" checked={socks} onChange={handleCheck}/>
                        <label htmlFor="socks"> Socks</label>
                        <input type="checkbox" id="jacket" name="jacket" checked={jacket} onChange={handleCheck}/>
                        <label htmlFor="jacket"> Jacket</label>
                    </div>
                    
                    <FileBase type="file" multiple={false} onDone={getBaseFile} />
                </form>
                <button onClick={uploadImage}>Add Product</button>
                <img width='100' src={myImage} alt="No image selected" />
                {warning2 ? <div style={{color: 'red'}}>All fields are required</div> : ''}
                {warning ? <div style={{color: 'red'}}>File type not supported</div> : ''}
            </div>
        </div>
    )
}

export default AddProduct;