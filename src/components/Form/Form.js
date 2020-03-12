import React from 'react';

import * as fields from './Fields';

const form = (props) => {
    return(  
        <form>
            <input type="text" placeholder="Title" onChange={props.changeHandler(fields.title)}></input>
            <input type="text" placeholder="Author" onChange={props.changeHandler(fields.author)}></input>
            <input type="number" placeholder="Year" onChange={props.changeHandler(fields.year)}></input>
            <input type="number" placeholder="Length" onChange={props.changeHandler(fields.length)}></input>
            <input type="number" placeholder="Rating" onChange={props.changeHandler(fields.rating)}></input>
            <input type="text" placeholder="Comment" onChange={props.changeHandler(fields.comment)}></input>

            <input type="text" placeholder="Username" onChange={props.changeHandler(fields.username)}></input>
        </form>
    );
}

export default form;