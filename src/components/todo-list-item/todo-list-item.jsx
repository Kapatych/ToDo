import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({task, important, done, onDeleteItem, onToggleDone, onToggleImportant}) => {
    let extraClass = 'todo-list-item d-flex';
    if(done) extraClass += ' done';
    if(important) extraClass += ' important';
    return (
        <span className={extraClass}>
                <span className='todo-list-item-label'
                      onClick={ () => onToggleDone()}>{task}</span>

                <button type='button'
                        onClick={ () => onToggleImportant()}
                        className="btn btn-outline-success btn-sm">
                     <i className="fa fa-exclamation"/>
                </button>
                <button onClick={ ()=> onDeleteItem() }
                        type='button'
                        className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash-o"/>
                </button>
            </span>
    )
};

export default TodoListItem;