import React, { useState } from 'react';
import ManageProducts from './ManageProducts';
import AddProduct from './AddProduct';
import CreateUser from './CreateUser';

const Admin = () => {

    const [sidebar, setSidebar] = useState(false);
    const [display, setDisplay] = useState('Manage Products');

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
                    <li onClick={() => setDisplay('Manage Products')}><i className='fa fa-eye'></i> Manage products</li>
                    <li onClick={() => setDisplay('Add Product')}><i className='fa fa-plus'></i> Add product</li>
                    {/* <li onClick={() => setDisplay('Create User')}><i className='fa fa-user'></i> Create user</li> */}
                </ul>
            </div>
        </aside>
        <div className={sidebar ? 'right-side' : ''}>
            { display === 'Manage Products' ? <ManageProducts /> :
                display === 'Add Product' ? <AddProduct /> : <CreateUser />
            } 
        </div>
        </>
    )
}

export default Admin;