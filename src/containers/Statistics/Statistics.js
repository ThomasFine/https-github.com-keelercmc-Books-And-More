import React, { Component } from 'react';
import axios from 'axios';


class Statistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            totalBooks: 0,
            totalPages: 0,
            totalRating: 0
        };
      }

    componentDidMount() {
        this.stats();
    }

    stats = () => {
        //Total books read: Sum of entries
        //Total pages read: Sum of entry lengths
        //Average page count: Sum of entry lengths / sum of entries
        //Average rating: Sum of entry ratings / number of entries
        axios.get('https://books-n-more.firebaseio.com/' + this.state.username + '.json').then(response => {
            this.setState({totalBooks: Object.keys(response.data).length})
            Object.keys(response.data).map(keyName => {
                this.setState({totalPages: this.state.totalPages + Number(response.data[keyName].length)});
                this.setState({totalRating: this.state.totalRating + Number(response.data[keyName].rating)});
            });
        });
    }
 
    
    //Favorite author: Form array of authors, sort, return most repeated author
    //Median year: Form array of years, sort, return middle element

    render() {
        return(
            <div>
                <h1>Overview for {this.state.username}:</h1>
                <h1>Total books read: {this.state.totalBooks}</h1>
                <h1>Total pages read: {this.state.totalPages}</h1>
                <h1>Average page count: {Math.floor(this.state.totalPages / this.state.totalBooks)}</h1>
                <h1>Average rating: {(this.state.totalRating / this.state.totalBooks).toFixed(1)}</h1>
            </div>
        );
    }
}
export default Statistics;
