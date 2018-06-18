import React from 'react';
import { Link } from 'react-router-dom';

const notFoundPage = () => (
    <div>
        Not Found - <Link to="/">Go Home</Link>
    </div>
);

export default notFoundPage;