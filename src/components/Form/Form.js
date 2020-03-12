import React from 'react';

const titleFieldName = 'name';
const authorFieldName = 'author';
const yearFieldName = 'year';
const lengthFieldName = 'length';
const ratingFieldName = 'rating';
const commentFieldName = 'comment';

const form = (props) => {
    return(  
        <form>
            <input type="text" placeholder="Title" onChange={props.changeHandler(titleFieldName)}></input>
            <input type="text" placeholder="Author" onChange={props.changeHandler(authorFieldName)}></input>
            <input type="number" placeholder="Year" onChange={props.changeHandler(yearFieldName)}></input>
            <input type="number" placeholder="Length" onChange={props.changeHandler(lengthFieldName)}></input>
            <input type="number" placeholder="Rating" onChange={props.changeHandler(ratingFieldName)}></input>
            <input type="text" placeholder="Comment" onChange={props.changeHandler(commentFieldName)}></input>
        </form>
    );
}

export default form;