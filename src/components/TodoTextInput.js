import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
//import autoBind from 'react-autobind';

export default class TodoTextInput extends Component{
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        placeholder: PropTypes.string,
        editting: PropTypes.bool,
        newTodo: PropTypes.bool
    };

    constructor(props, context){
        super(props, context);
        this.state = {
            text : this.props.text || ''
        };
    }

    handleSubmit = (e) => {
        const text = e.target.value.trim();
        if (e.which === 13){
            this.props.onSave(text);
            if(this.props.newTodo){
                this.setState({text: ''});
            }
        }
    }

    handleChange = (e) => {
        this.setState({text: e.target.value});
    }

    handleBlur = (e)=>{
        if(!this.props.newTodo){
            this.props.onSave(e.target.value);
        }
    }

    render(){
        return (
            <input className = {classnames({
                edit: this.props.editting,
                'new-todo': this.props.newTodo
            })}
            type = 'text'
            placeholder = {this.props.placeholder}
            autoFocus = 'true'
            value = {this.state.text}
            onBlur = {this.handleBlur}
            onChange = {this.handleChange}
            onKeyDown = {this.handleSubmit} />
        );
    }
}