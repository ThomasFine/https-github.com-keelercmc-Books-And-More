import React from 'react';

const checkbox = (props) => {
    return (
        <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} />
    )
}

export default checkbox;
