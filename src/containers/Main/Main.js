import React, { Component } from 'react';
import axios from 'axios';

import Form from '../../components/Form/Form';
import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '../../components/Button/Button';
import Row from '../../components/Row/Row';
import Statistics from '../../components/Statistics/Statistics';


class Main extends Component {

    state = {
        name: '',
        author: '',
        year: 0,
        length: 0,
        rating: 0,
        comment: '',
        books: [],
        username: 'Shane'
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
            comment: this.state.comment
        }
        await axios.post('https://books-n-more.firebaseio.com/' + this.state.username + '.json', post);
        this.updateBookList();
    }

    deleteBook = () => {
        //delete selected book
        //first figure out how to select a book
    }

    updateBookList = () => {
        axios.get('https://books-n-more.firebaseio.com/' + this.state.username + '.json').then(response => {
            const books = Object.keys(response.data).map(keyName => response.data[keyName]);
            this.setState({books: books});
            this.renderBookList();
            });
    }

    renderBookList = () => {
        const bookList = this.state.books.map((book) =>
            <li><Row title={book.name} author={book.author} key={book.name + book.author}/></li>
        );
        return (
            <ul>{bookList}</ul>
        );
    }


    render() {
        return(
            <div>
                <Form changeHandler={this.entryHandler}/>
                <Button add={this.submitBook}>Add Book</Button>
                <Button add={this.updateBookList}>Get New Books</Button>
                <Button add={this.deleteBook}>Delete Book</Button>
                {this.renderBookList()}
                <Statistics username={this.state.username}/>
            </div>
        );
    }
}

<li><a href="/ContactUs/contact.html">Contact Us</a></li>
export default Main;
