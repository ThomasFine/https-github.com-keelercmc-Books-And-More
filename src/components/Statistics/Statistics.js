import React, { Component } from 'react';
import axios from 'axios';


class Statistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            totalBooks: 0
        };
      }

    componentDidMount() {
        this.totalBooks();
    }

    totalBooks = () => {
        //Total books read: Sum of entries
        axios.get('https://books-n-more.firebaseio.com/' + 'chance' + '.json').then(response => {
            this.setState({totalBooks: Object.keys(response.data).length});
        });
    }

    //Total pages read: Sum of entry lengths
    //Average rating: Sum of entry ratings / number of entries
    //Favorite author: Form array of authors, sort, return most repeated author
    //Median year: Form array of years, sort, return middle element

    render() {
        return(
            <div>
                <hi>Total books read for {this.state.username}: {this.state.totalBooks}</hi>
            </div>
        );
    }
}
export default Statistics;
