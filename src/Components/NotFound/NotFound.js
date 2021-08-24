import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content text-center">
                <h1>404 ,Not Found</h1>
                <Link className="back" to="/">Back to Home 😄 </Link>
            </div>
        </div>
    );
};

export default NotFound;