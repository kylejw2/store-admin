import React, {useState, useEffect} from 'react';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/images`);
        const products = await response.json();
        setProducts(products);
    }

    const getImages = () => {
        return products.map(product => {
            return <img width='200' src={product.imageData} alt='' key={product.imageName} />
        })
    }

    return (
        <>
        <section className='sub-nav'>
            <i className='fa fa-filter' > Filter by:</i>
            <i className='fa fa-sort' > Sort by:</i>
        </section>
        <main>
            <table className="table table-bordered">
                <thead className="table-head">
                    <tr>
                        <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Product</th>
                        <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Quantity</th>
                        <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Price</th>
                        <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Status</th>
                        <th scope="col" style={{width: `${window.innerWidth/5}px`}}>Actions</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            {getImages()}
        </main>
        </>
    )
}

export default ManageProducts;