import React, { Component } from 'react';
import axios from 'axios';



class Statistics extends Component {

    state = {
        totalBooks: 0
    }

    componentDidMount() {
        this.totalBooks();
    }

    totalBooks = () => {
        axios.get('https://books-n-more.firebaseio.com/' + 'chance' + '.json').then(response => {
            this.setState({totalBooks: Object.keys(response.data).length});
        });
    }

    render() {
        return(
            //Total books read: Sum of entries
            <hi>Total books read: {this.state.totalBooks}</hi>

            //Total pages read: Sum of entry lengths

            //Average rating: Sum of entry ratings / number of entries

            //Favorite author: Form array of authors, sort, return most repeated author

            //Median year: Form array of years, sort, return middle element
        );
    }
} 
export default Statistics;