import React from 'react';
import './search-panel.css';

export default class SearchPanel extends React.Component {

    state = {
        text: '',
    };

    changeText = (e) => {
        this.setState({text: e.target.value});
        this.props.onSearchItems(e.target.value);
    };

    render() {
        return (
            <section className='search-panel'>
                <input type='text' className='form-control search-input'
                       placeholder='type to search'
                       value={this.state.text}
                       onChange={ this.changeText }/>
            </section>
        )
    }

};
