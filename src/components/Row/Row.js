import React from 'react';
import './Row.css';

const row = (props) => {
    return (
        <div>
            <input type="checkbox" />
            <h2>{props.title} - </h2>
            <h2>{props.author}</h2>
        </div>
    );
}

export default row;
