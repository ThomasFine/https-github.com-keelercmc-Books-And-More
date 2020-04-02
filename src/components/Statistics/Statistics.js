import React from 'react';

const statistics = (props) => {
    return(
        <div>
            <h1>Overview for {props.username}:</h1>
            <h1>Total books read: {props.stats.totalBooks}</h1>
            <h1>Total pages read: {props.stats.totalPages}</h1>
            <h1>Average page count: {Math.floor(props.stats.totalPages / props.stats.totalBooks)}</h1>
            <h1>Average rating: {(props.stats.totalRating / props.stats.totalBooks).toFixed(1)}</h1>
        </div>
    );
}
export default statistics;
