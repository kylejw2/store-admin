import React from 'react';

const Product = (props) => {

    const changeActivity = async () => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({bool: !props.product.status})
        }
        await fetch(`${process.env.REACT_APP_API_URL}/products/${props.product._id}`, options);
        await props.getProducts();
    }

    return (
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.quantity}</td>
            <td>${props.product.price}</td>
            <td>{props.product.status ? 'Active' : 'Not active'}</td>
            <td>
                {props.product.status ? <button onClick={changeActivity} className='deactivate'>Deactivate</button>
                    :   <button onClick={changeActivity} className='activate'>Activate</button>
                }
                <button className='update' onClick={() => props.changeDisplay('single', props.product)}>Update</button>
            </td>
        </tr>
    )
}

export default Product;