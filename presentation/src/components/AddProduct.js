import React, {useState} from 'react';

const AddProduct = () => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState(true);
    const [images, setImages] = useState('');

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
                    <input style={{marginTop: '20px' }} type='file' placeholder='Image' value={images} onChange={({target}) => setImages(target.value)} />
                </form>
                <button>Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct;