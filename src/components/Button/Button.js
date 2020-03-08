import React from 'react';

const button = (props) => {
    return (
        <button onClick={props.add}>Add Book</button>
    );
}

export default button;