import React from 'react';
import './Row.css';

const row = (props) => {
    return (
        <div>
            <input type = "checkbox" />
            <h2>{props.title} - </h2>
            <h2>{props.author}</h2>
            <h2>{props.year}</h2>
            <h2>{props.length}</h2>
            <h2>{props.rating}</h2>
            <h2>{props.comment}</h2>
        </div>
    );
}

export default row;
