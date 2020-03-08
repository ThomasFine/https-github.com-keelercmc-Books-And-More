import React from 'react';

const form = (props) => {
    return(
        <form>
            <input type="text" placeholder="Title" onChange={props.title}></input>
            <input type="text" placeholder="Author" onChange={props.author}></input>
            <input type="number" placeholder="Year" onChange={props.year}></input>
            <input type="number" placeholder="Length" onChange={props.length}></input>
            <input type="number" placeholder="Rating" onChange={props.rating}></input>
            <input type="text" placeholder="Comment" onChange={props.comment}></input>
        </form>
    );
}

export default form;