import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '550px', height: '500px' }} src={notfound} alt="" />
            <div>
                <button>
                    <Link to="/">Go Back Home</Link>
                </button>
            </div>
        </div>
    );
};

export default NotFound;