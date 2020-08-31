import React from 'react';

const Admin = () => {

    return (
        <>
        <nav>
            <i className='fa fa-bars' style={{fontSize: '30px'}}></i>
            <h1 className='logo'>La'Bore</h1>
        </nav>
        <section className='sub-nav'>
            <i className='fa fa-filter' style={{fontSize: '20px'}}> Filter by:</i>
            <i className='fa fa-sort' style={{fontSize: '20px'}} > Sort by:</i>
        </section>
        <aside>

        </aside>
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

export default Admin;