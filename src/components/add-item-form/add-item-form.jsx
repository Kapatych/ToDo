import React from 'react';
import './add-item-form.css';

export default class AddItemForm extends React.Component{

    state = {
        text: '',
    };

    submitForm = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.text);
        this.setState({
            text: ''
        })
    };

    changeText = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    render() {
        return (
            <section className='add-item-form'>
                <form onSubmit={this.submitForm} className='d-flex'>
                    <input type="text"
                           onChange={this.changeText}
                           value={this.state.text}
                           className='form-control search-input'/>
                    <button className='btn btn-info'
                            type='submit'>Add task</button>
                </form>
            </section>
        )
    }


};