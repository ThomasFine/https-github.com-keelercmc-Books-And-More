import React, { Component } from 'react';
import axios from 'axios';


class Statistics extends Component {

    state = {
        username: this.props.username,
        stats: this.props.stats
    }

    log = () => console.log(this.state.stats);

    render() {
        return(
            <div>
                {this.log()}
                <h1>Overview for {this.state.username}:</h1>
                <h1>Total books read: {this.state.stats.totalBooks}</h1>
                <h1>Total pages read: {this.state.stats.totalPages}</h1>
                <h1>Average page count: {Math.floor(this.state.stats.totalPages / this.state.stats.totalBooks)}</h1>
                <h1>Average rating: {(this.state.stats.totalRating / this.state.stats.totalBooks).toFixed(1)}</h1>
            </div>
        );
    }
}
export default Statistics;
