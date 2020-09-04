import React, {useState, useEffect} from 'react';
import Tags from './Tags';

const DisplayProduct = (props) => {

    const [name, setName] = useState(props.product.name);
    const [quantity, setQuantity] = useState(props.product.quantity);
    const [price, setPrice] = useState(props.product.price);
    const [images, setImages] = useState('');
    const [mainImage, setMainImage] = useState('');
    const [warning, setWarning] = useState(false);
    const [warning2, setWarning2] = useState(false);
    const [shirt, setShirt] = useState(false);
    const [shoes, setShoes] = useState(false);
    const [pants, setPants] = useState(false);
    const [hoodie, setHoodie] = useState(false);
    const [socks, setSocks] = useState(false);
    const [jacket, setJacket] = useState(false);

    useEffect(() => {
        for (let i = 0; i < props.product.style.length; i++) {
            if (props.product.style[i] === 'shirt') {setShirt(true)}
            if (props.product.style[i] === 'shoes') {setShoes(true)}
            if (props.product.style[i] === 'pants') {setPants(true)}
            if (props.product.style[i] === 'hoodie') {setHoodie(true)}
            if (props.product.style[i] === 'socks') {setSocks(true)}
            if (props.product.style[i] === 'jacket') {setJacket(true)}
        }
        getImages();
    }, []);

    const handleCheck = ({target}) => {
        let update;
        switch(target.name) {
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

    const getImages = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/images/${props.product._id}`);
        const data = await response.json();
        setMainImage(data[0]);
        setImages(data);
    }

    const displayImages = () => {
        if (images === '') {return}
        return images.map(image => {
            return ( <img key={image._id} src={image.imageData} alt='' onClick={() => setMainImage(image)}/>)
        })
    }

    const getMainImage = () => {
        if (mainImage === '') {return}
        return <img src={mainImage.imageData} alt='' />
    }

    const updateProduct = async () => {
        if (name === '' || quantity === '' || price === '' ) {
            setWarning2(true);
            return;
        }
        const product = {
            name: name,
            quantity: quantity,
            price: price,
            images: props.product.images,
            status: props.product.status,
            style: []
        }
        if (shirt) {product.style.push('shirt')}
        if (shoes) {product.style.push('shoes')}
        if (pants) {product.style.push('pants')}
        if (hoodie) {product.style.push('hoodie')}
        if (socks) {product.style.push('socks')}
        if (jacket) {product.style.push('jacket')}
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }
        await fetch(`${process.env.REACT_APP_API_URL}/products/${props.product._id}`, options);
        await props.getProducts();
        props.changeDisplay('All', '');
        // redirect the admin to the manage products page or send a confirmation alert
    }

    const deleteProduct = async () => {
        const result = window.confirm('You cannot recover this product once it is deleted. Are you sure you want to continue?');
        if (!result) {return;}
        const options = {
            method: 'DELETE'
        }
        // Delete the product
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${props.product._id}`, options);

        // Delete the images
        const options2 = {
            method: 'DELETE',
            body: JSON.stringify(props.product.images)
        }
        const data = await fetch(`${process.env.REACT_APP_API_URL}/images`, options2);
        await props.getProducts();
        props.changeDisplay('All', '');
    }

    return (
        <>
        <p onClick={() => props.changeDisplay('All', {})}><i style={{margin: '0px 10px 0 5%', border: 'none !important'}} className="fa fa-arrow-left"></i> Return</p>
        <div className='display-product-page'>
            <section style={{textAlign: 'center'}}>
                <div className='main-image'>
                    {getMainImage()}
                </div>
                <div className='sub-images'>
                    {displayImages()}
                    {images.length > 1 ? <i className='fa fa-trash'></i> : ''}
                </div>
            </section>
            <section className='display-product display-product-container'>
                <label>Name:</label>
                <input value={name} onChange={({target}) => setName(target.value)} />
                <label>Quantity:</label>
                <input value={quantity} onChange={({target}) => setQuantity(target.value)}/>
                <label>Price:</label>
                <input value={price} onChange={({target}) => setPrice(target.value)}/>
                <div style={{margin: '25px 0px'}}></div>
                <Tags handleCheck={handleCheck} shirt={shirt} shoes={shoes} pants={pants} hoodie={hoodie} socks={socks} jacket={jacket}/>
                {warning2 ? <div className='danger'>Name, quantity and price fields must be filled</div> : ''}
                <button style={{width: '100%'}} onClick={updateProduct}>Update</button>
                <button style={{width: '100%', background: 'red', color:'white', marginBottom: '15px'}} onClick={deleteProduct}>Delete product</button>
            </section>
        </div>
        </>
    )
}

export default DisplayProduct;