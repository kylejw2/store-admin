import React, { useState } from 'react';

const Admin = () => {

    const [sidebar, setSidebar] = useState(false);

    const toggle = () => {
        const change = !sidebar;
        setSidebar(change);
    }

    return (
        <>
        <nav>
            <i className='fa fa-bars' style={{fontSize: '30px'}} onClick={toggle}></i>
            <h1 className='logo'>La'Borh</h1>
        </nav>
        <aside className={sidebar ? '' : 'hidden'}>
            <div className='sidebar'>
                <ul>
                    <li><i className='fa fa-eye'></i> Manage Products</li>
                    <li><i className='fa fa-plus'></i> Add product</li>
                    <li><i className='fa fa-user'></i> Create user</li>
                </ul>
            </div>
        </aside>
        <div className={sidebar ? 'right-side' : ''}>
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
        </div>
        </>
    )
}

export default Admin;