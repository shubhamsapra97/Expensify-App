import React from 'react';
import { Link } from 'react-router-dom';
 
const ListItem = ({id , description , amount , createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <p>{description}</p>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ListItem;