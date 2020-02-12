import React from 'react';
import './filter.css';

const Filter = ({filter, onFilterItems}) => {

    const buttonsData = [
        {type: 'all', label: 'All'},
        {type: 'active', label: 'Active'},
        {type: 'done', label: 'Done'},
    ];

    const buttons = buttonsData.map( ({type, label}) => {
        const isActive = type === filter;
        const classes = isActive ? 'btn-info' : 'btn-outline-secondary';

        return (
            <button key={type}
                    className={`btn ${classes}`}
                    onClick={ ()=> onFilterItems(type)} >{label}</button>
        )
    });

    return (
        <section className='filter btn-group'>
            {buttons}
        </section>
    )
};

export default Filter;