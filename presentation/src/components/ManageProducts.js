import React, {useState, useEffect} from 'react';
import Product from './Product';
import DisplayProduct from './DisplayProduct';

const ManageProducts = (props) => {

    const [products, setProducts] = useState([]);
    const [display, setDisplay] = useState('All');
    const [product, setProduct] = useState('');
    const [lastChange, setLastChange] = useState('');

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
        const products = await response.json();
        setProducts(products);
    }

    const changeDisplay = (disp, product) => {
        setDisplay(disp);
        setProduct(product);
    }

    const showProducts = () => {
        return products.map(product => <Product 
            key={product._id}
            product={product}
            changeDisplay={changeDisplay}
            getProducts={getProducts}
            />
        )
    }

    const alphabetize = () => {
        const myProducts = [...products];
        myProducts.sort((a,b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (lastChange === 'name') {
                if (nameA > nameB) {
                    return -1;
                } else if (nameA < nameB) {
                    return 1;
                } else {
                    return 0;
                }
            } else {
                if (nameA < nameB) {
                    return -1;
                } else if (nameA > nameB) {
                    return 1;
                } else {
                    return 0;
                }
            }
        })
        setProducts(myProducts);
        setLastChange('name')
    }

    const sortNum = (val, array) => {
        // Quick sort algorithm
        if (array.length <= 1) {return array;}

        const left = [];
        const right = [];
        const pivot = array[array.length - 1];

        for (let i = 0; i < array.length; i++) {
            if (+array[i][val] <= +pivot[i][val]) {
                if (lastChange === val) {
                    right.push(array[i]);
                    continue;
                }
                left.push(array[i]);
            } else {
                if (lastChange === val) {
                    left.push(array[i]);
                    continue;
                }
                right.push(array[i]);
            }
        }

        let myProducts = [];

        if (left.length > 0 && right.length > 0) {
            myProducts = [...sortNum(val, left), pivot, ...sortNum(val, right)];
        } else if (left.length > 0) {
            myProducts = [...sortNum(val, left), pivot];
        } else {
            myProducts = [pivot, ...sortNum(val, right)];
        }

        // const myProducts = [...products];
        // myProducts.sort((a,b) => {
        //     if (lastChange === val) {
        //         return +b[val] - +a[val];
        //     }
        //     return +a[val] - +b[val];
        // });
        setProducts(myProducts);
        if (lastChange === val) {setLastChange('')}
        else {setLastChange(val);}
    }

    const sortActivity = () => {
        const myProducts = [...products];
        myProducts.sort((a,b) => {
            if (lastChange === 'status') {
                if (a.status === true && a.status !== b.status) {
                    return -1;
                } else if (a.status === false && a.status !== b.status) {
                    return 1;
                } else {
                    return 0;
                }
            }
            else {
                if (a.status === true && a.status !== b.status) {
                    return 1;
                } else if (a.status === false && a.status !== b.status) {
                    return -1;
                } else {
                    return 0;
                }
            }
        })
        setProducts(myProducts);
        if (lastChange === 'status') {
            setLastChange('');
            return;
        }
        setLastChange('status');
    }

    return (
        <>
        {display === 'All' ? 
            <>
            <main>
                <table className="table table-bordered product-table">
                    <thead className="table-head">
                        <tr>
                            <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Product <i onClick={alphabetize} className='fa fa-sort'></i></th>
                            <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Quantity <i onClick={() => sortNum('quantity', [...products])} className='fa fa-sort'></i></th>
                            <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Price <i onClick={() => sortNum('price', [...products])} className='fa fa-sort'></i></th>
                            <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Status <i onClick={sortActivity} className='fa fa-sort'></i></th>
                            <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showProducts()}
                    </tbody>
                </table>
            </main> 
            </> :
            <>
            <DisplayProduct product={product} getProducts={getProducts} changeDisplay={changeDisplay}/>
            </>
        }
        
        </>
    )
}

export default ManageProducts;