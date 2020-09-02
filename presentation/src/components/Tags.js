import React from 'react';

const Tags = (props) => {
    return (
        <>
        <p><i>Select all that apply</i></p>
        <div className='tags'>
            <input type="checkbox" id="shirt" name="shirt" checked={props.shirt} onChange={props.handleCheck}/>
            <label htmlFor="shirt"> Shirt</label>
            <input type="checkbox" id="shoes" name="shoes" checked={props.shoes} onChange={props.handleCheck} />
            <label htmlFor="shoes"> Shoes</label>
            <input type="checkbox" id="pants" name="pants" checked={props.pants} onChange={props.handleCheck}/>
            <label htmlFor="pants"> Pants</label>
            <input type="checkbox" id="hoodie" name="hoodie" checked={props.hoodie} onChange={props.handleCheck} />
            <label htmlFor="hoodie"> Hoodie</label>
            <input type="checkbox" id="socks" name="socks" checked={props.socks} onChange={props.handleCheck}/>
            <label htmlFor="socks"> Socks</label>
            <input type="checkbox" id="jacket" name="jacket" checked={props.jacket} onChange={props.handleCheck}/>
            <label htmlFor="jacket"> Jacket</label>
        </div>
        </>
    )
}

export default Tags;