import React from 'react';
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

const TodoList = ( {tasks, onDeleteItem, onToggleDone, onToggleImportant} ) => {
    const todoItems = tasks.map( item => {
        const {id, ...itemProps} = item;

        return (
            <li key={id} className='list-group-item'>
                <TodoListItem {...itemProps}
                              onDeleteItem={ () => onDeleteItem(id) }
                              onToggleDone={ () => onToggleDone(id) }
                              onToggleImportant={ () => onToggleImportant(id) }/>
            </li>
        )
    } );

    return (
        <section className='todo-list'>
            <ul className='list-group'>
                { todoItems }
            </ul>
        </section>
    )
};

export default TodoList;