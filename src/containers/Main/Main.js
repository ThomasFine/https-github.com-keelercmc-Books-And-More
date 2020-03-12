import React, { Component } from 'react';
import axios from 'axios';

import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import Row from '../../components/Row/Row';

class Main extends Component {

    state = {
        name: '',
        author: '',
        year: 0,
        length: 0,
        rating: 0,
        comment: '',
        books: []
    }

    componentDidMount() {
        axios.get('https://books-n-more.firebaseio.com/chance.json').then(response => {
            const books = Object.keys(response.data).map(keyName => response.data[keyName]);
            this.setState({books: books});
            });
    }

    entryHandler = param => event => {
        this.setState({
            [param]: event.target.value
        });
    }

    submitBook = () => {
        const post = {
            name: this.state.name,
            author: this.state.author,
            year: this.state.year,
            length: this.state.length,
            rating: this.state.rating,
            comment: this.state.comment
        }
        axios.post('https://books-n-more.firebaseio.com/chance.json', post).then(response => {
            console.log(response);
        });
    }

    renderBookList = () => {
        const bookList = this.state.books.map((book) =>
            <li><Row title={book.name} author={book.author} key={book.name}/></li>
        );
        return (
            <ul>{bookList}</ul>
        );
    }

    render() {
        return(
            <div>
                <Form changeHandler={this.entryHandler}/>
                <Button add={this.submitBook}/>
                {this.renderBookList()}
            </div>
        );
    }
}

export default Main;