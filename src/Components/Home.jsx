import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Home = () => {
    return <>
        <div className='hero'>
            <div className='bigtext'>
                <p>Organize your user and edit as you want.</p>
            </div>
            <div className='smalltext'>
                <p>Become  organized, and calm with AdminApp. The world’s #1 user manager and Admin app.</p>
            </div>
            <Link to='/create'><Button variant="outline-success">Add user</Button></Link>
        </div>

    </>
}

export default Home
