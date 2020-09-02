import React from 'react';

const Product = (props) => {
    return (
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.quantity}</td>
            <td>${props.product.price}</td>
            <td>{props.product.status ? 'Active' : 'Not active'}</td>
            <td>
                {props.product.status ? <button className='deactivate'>Deactivate</button>
                    :   <button className='activate'>Activate</button>
                }
                <button className='update' onClick={() => props.changeDisplay('single', props.product)}>Update</button>
            </td>
        </tr>
    )
}

export default Product;