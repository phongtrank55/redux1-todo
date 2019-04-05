import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput';
import PropTypes from 'prop-types';

export default class Header extends Component{
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
    }

    handleSave = (text) => {
        if(text.length !== 0){
            this.props.addTodo(text);
        }
    }

    render() {
        return (
            <header className='header'>
                <h1>Todos</h1>
                <TodoTextInput newTodo = {true}
                onSave = {this.handleSave}
                placeholder = 'We need to be done'/>
            </header>
        );
    }
}