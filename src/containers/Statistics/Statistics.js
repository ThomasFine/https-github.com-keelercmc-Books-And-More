import React, { Component } from 'react';
import axios from 'axios';


class Statistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            stats: {
                totalBooks: 0,
                totalPages: 0,
                totalRating: 0
            }
        };
      }

    componentDidMount() {
        this.getStats();
    }

    getStats = () => {
        let stats = {
            totalBooks: 0,
            totalPages: 0,
            totalRating: 0
        };

        axios.get('https://books-n-more.firebaseio.com/' + this.state.username + '.json').then(response => {
            Object.keys(response.data).map(keyName => {
                stats.totalBooks = Object.keys(response.data).length;
                stats.totalPages += Number(response.data[keyName].length);
                stats.totalRating += Number(response.data[keyName].rating);
            });
        });
        this.setState({stats: stats});
    }

    render() {
        return(
            <div>
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
