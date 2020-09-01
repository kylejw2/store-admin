import React from 'react';

const ManageProducts = () => {
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
        </main>
        </>
    )
}

export default ManageProducts;