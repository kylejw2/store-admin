import React, {useState} from 'react';
import FileBase from 'react-file-base64';
import Tags from './Tags';

const AddProduct = () => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState(true);
    const [images, setImages] = useState('');
    const [warning, setWarning] = useState(false);
    const [warning2, setWarning2] = useState(false);
    // const [myImage, setMyImage] = useState('');
    const [shirt, setShirt] = useState(false);
    const [shoes, setShoes] = useState(false);
    const [pants, setPants] = useState(false);
    const [hoodie, setHoodie] = useState(false);
    const [socks, setSocks] = useState(false);
    const [jacket, setJacket] = useState(false);
    const [loading, setLoading] = useState(false);

    const refresh = () => {
        setName('');
        setQuantity('');
        setPrice('')
        setStatus(true);
        setImages('');
        setWarning(false);
        setWarning2(false);
        // setMyImage('');
        setShirt(false);
        setShoes(false);
        setPants(false);
        setHoodie(false);
        setSocks(false);
        setJacket(false);
    }

    const uploadImage = async () => {
        if (name === '' || quantity === '' || price === '') {
            setWarning2(true);
            return
        }
        // if (images === 'invalid' || images === '') {
        //     setWarning(true);
        //     return;
        // }
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
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/images`, options);
        const data = await response.json();

        // use a PATCH method to update the existing photos with the corresponding product's id
        const id = data._id;
        await fetch(`${process.env.REACT_APP_API_URL}/images/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data.images)
        })
        refresh();
        setLoading(false);
    }// do a single image and then multiple images

    // function to capture base64 format of an image
    const getBaseFile = (files) => {
        const imageObjs = [];
        for (let i = 0; i < files.length; i++) {
            if (files[i].type !== 'image/jpeg') {
                // setMyImage('');
                setImages('invalid');
                return;
            }
            let imageObj = {
                imageName: "base-image-" + Date.now(),
                imageData: files[i].base64.toString()
            };
            imageObjs.push(imageObj);
        }
        setWarning(false);
        // setMyImage(imageObj.imageData);
        setImages(imageObjs);
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
                    <Tags handleCheck={handleCheck} shirt={shirt} shoes={shoes} pants={pants} hoodie={hoodie} socks={socks} jacket={jacket}/>
                    
                    <FileBase type="file" multiple={true} onDone={getBaseFile} />
                </form>
                <button onClick={uploadImage}>Add Product</button>
                {loading ? <div className='loading'>Uploading product - Do not refresh browser or return to home page</div> : ''}
                {/* <img width='100' src={myImage} alt="No image selected" /> */}
                {warning2 ? <div style={{color: 'red'}}>All fields are required</div> : ''}
                {warning ? <div style={{color: 'red'}}>File type not supported</div> : ''}
            </div>
        </div>
    )
}

export default AddProduct;