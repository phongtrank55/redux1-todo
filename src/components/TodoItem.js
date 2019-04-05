import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

export default class TodoTextItem extends Component{
    static propTypes = {
        todo : PropTypes.object.isRequired,
        deleteTodo : PropTypes.func.isRequired,
        editTodo : PropTypes.func.isRequired,
        markTodo : PropTypes.func.isRequired
    };

    constructor(props, context){
        super(props, context);
        this.state = {
            editting: false
        };
    }

    handleDoubleClick = ()=>{
        this.setState({editting: true});
    }

    handleSave = (id, text) => {
        if(text.length === 0){
            this.props.deleteTodo(id);
        }else{
            this.props.editTodo(id, text);
        }
        this.setState({editting: false});
    }

    render(){
        const {todo, markTodo, deleteTodo} = this.props;
        let element;
        if(this.state.editting){
            element = (
                <TodoTextInput text={todo.text} editting = {this.state.editting} 
                    onSave={(text)=>this.handleSave(todo.id, text)} />
            );
        }else{
            element = (
                <div className='view'>
                    <input className = 'toggle'
                        type = 'checkbox'
                        checked = {todo.marked}
                        onChange = {()=>markTodo(todo.id)}
                    />
                    <label onDoubleClick = {this.handleDoubleClick}>
                        {todo.text}
                    </label>
                    <button className="destroy" onClick={()=>deleteTodo(todo.id)}>destroy</button>
                </div>
            );
        }

        return (
            <li className = {classnames({
                completed: todo.marked,
                editting: this.state.editting
            })}>
                {element}
            </li>
        );
    }
}