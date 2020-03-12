import React from 'react';

const button = (props) => {
    return (
        <button onClick={props.add}>{props.children}</button>
    );
}

export default button;