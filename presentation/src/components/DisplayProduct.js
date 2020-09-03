import React, {useState, useEffect} from 'react';
import Tags from './Tags';

const DisplayProduct = (props) => {

    console.log(props.product);

    const [name, setName] = useState(props.product.name);
    const [quantity, setQuantity] = useState(props.product.quantity);
    const [price, setPrice] = useState(props.product.price);
    const [images, setImages] = useState(props.product.images);
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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/images/${props.product._id}`)
    }

    return (
        <div>
            <p onClick={() => props.changeDisplay('All', {})}><i style={{margin: '0px 10px 0 5%', border: 'none !important'}} className="fa fa-arrow-left"></i> Return</p>
            <section className='display-product container'>
                <label>Name:</label>
                <input value={name} onChange={({target}) => setName(target.value)} />
                <label>Quantity:</label>
                <input value={quantity} onChange={({target}) => setQuantity(target.value)}/>
                <label>Price:</label>
                <input value={price} onChange={({target}) => setPrice(target.value)}/>
                <div style={{margin: '25px 0px'}}></div>
                <Tags handleCheck={handleCheck} shirt={shirt} shoes={shoes} pants={pants} hoodie={hoodie} socks={socks} jacket={jacket}/>
            </section>
            <section>
                {/* {getImages()} */}
            </section>
        </div>
    )
}

export default DisplayProduct;