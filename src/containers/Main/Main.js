import React, { Component } from 'react';

import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';

class Main extends Component {

    state = {
        name: '',
        author: '',
        year: 0,
        length: 0,
        rating: 0,
        comment: ''
    }

    entryTitleHandler = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    entryAuthorHandler = (event) => {
        this.setState({
            author: event.target.value
        });
    }

    entryYearHandler = (event) => {
        this.setState({
            year: event.target.value
        });
    }

    entryLengthHandler = (event) => {
        this.setState({
            length: event.target.value
        });
    }

    entryRatingHandler = (event) => {
        this.setState({
            rating: event.target.value
        });
    }

    entryCommentHandler = (event) => {
        this.setState({
            comment: event.target.value
        });
    }

    submitBook = () => {
        //axios request
        console.log(this.state.name + " was added to database");
    }

    render() {
        return(
            <div>
                <Form title={this.entryTitleHandler} author={this.entryAuthorHandler} year={this.entryYearHandler} length={this.entryLengthHandler} rating={this.entryRatingHandler} comment={this.entryCommentHandler}/>
                <Button add={this.submitBook}/>
            </div>
        );
    }
}

export default Main;