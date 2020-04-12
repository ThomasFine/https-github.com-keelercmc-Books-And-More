import React, { Component } from 'react';
import axios from 'axios';

import Form from '../../components/Form/Form';
import Checkbox from '../../components/Checkbox/Checkbox';
import Row from '../../components/Row/Row';
import Statistics from '../../components/Statistics/Statistics';

import Button from 'react-bootstrap/Button';


class Main extends Component {

    state = {
        username: 'chance',
        name: '',
        author: '',
        year: 0,
        length: 0,
        rating: 0,
        comment: '',
        books: [],
        keys: [],
        stats: {
            totalBooks: 0,
            totalPages: 0,
            totalRating: 0
        },
        showStats: false
    }

    componentDidMount() {
        this.updateBookList();
    }

    entryHandler = param => event => {
        this.setState({
            [param]: event.target.value
        });
    }

    submitBook = async () => {
        const post = {
            name: this.state.name,
            author: this.state.author,
            year: this.state.year,
            length: this.state.length,
            rating: this.state.rating,
            comment: this.state.comment,
            index: null
        }
        await axios.post('https://books-n-more.firebaseio.com/' + this.state.username + '.json', post);
        this.updateBookList();
    }

    deleteBook = async (index) => {
        await axios.delete('https://books-n-more.firebaseio.com/' + this.state.username + '/' + this.state.keys[index-1] + '.json')
        this.updateBookList();
    }

    updateBookList = () => {

        let stats = {
            totalBooks: 0,
            totalPages: 0,
            totalRating: 0
        };

        let counter = 0

        axios.get('https://books-n-more.firebaseio.com/' + this.state.username + '.json').then(response => {
            const books = Object.keys(response.data).map(keyName => response.data[keyName]);
            stats.totalBooks = Object.keys(response.data).length;
            const keys = Object.keys(response.data);
            Object.keys(response.data).forEach(keyName => {
                stats.totalPages += Number(response.data[keyName].length);
                stats.totalRating += Number(response.data[keyName].rating);
            });
            books.forEach(book => {
                book.index = ++counter
            })
            this.setState({books: books, stats: stats, keys: keys});
            this.renderBookList();
        });
    }
    
    renderBookList = () => {

        const divStyle = {
            margin: '0px',
            marginLeft: '80px',
            marginRight: '80px',
            padding: '5px',
            border: '2px solid black',
            fontSize: '12px',
            textAlign: 'left',
            background-color: 'blue'
        };
        const bookList = this.state.books.map((book) =>
            <div style={divStyle}>
                <li>{book.index}<Row title={book.name} author={book.author}/></li>
                <Button variant="danger" onClick={() => this.deleteBook(book.index)}>x</Button>
                </div>
        );
        return (
            <ul>{bookList}</ul>
        );
    }

    enableStats = () => {
        this.setState({showStats: !this.state.showStats});
    }

    displayStats = () => {
        return <Statistics username={this.state.username} stats={this.state.stats}/>
    }

    render() {
        return(
            <div>
                <Form changeHandler={this.entryHandler}/>
                <Button variant="light" onClick={this.submitBook}>Add Book</Button>
                <Button variant="light"onClick={this.updateBookList}>Fetch Books</Button>
                {this.renderBookList()}
                <Button variant="dark" onClick={this.enableStats}>Show Statistics</Button>
                {this.state.showStats ? this.displayStats() : null}    
            </div>
        );
    }
}
export default Main;
