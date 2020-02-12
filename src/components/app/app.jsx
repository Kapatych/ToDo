import React from 'react';
import './app.css';
import Header from "../header/header";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../filter/filter";
import TodoList from "../todo-list/todo-list";
import AddItemForm from "../add-item-form/add-item-form";

export default class App extends React.Component {

    totalCountItem = 1;

    createItem = (task) => {
        return {
            id: this.totalCountItem++,
            task,
            important: false,
            done: false
        }
    };

    state = {
        data: [
            this.createItem('Drink Coffee'),
            this.createItem('Drink Tea'),
            this.createItem('Drink Whiskey'),
            this.createItem('Drink Cola'),
            this.createItem('Drink Water'),
        ],
        term: '',
        filter: 'all',
    };

    deleteItem = (id) => {
        this.setState( ({data}) => {
            return {
                data: data.filter( el => el.id !== id)
            }
        })
    };

    addItem = (text) => {
        this.setState( ({data}) => {
            return{
                data: [...data, this.createItem(text)]
            }
        })
    };

    toggleProperty = (array, id, propName) => {

        const idx = array.findIndex(el => el.id === id);
        const oldItem = array[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [...array.slice(0, idx),
            newItem,
            ...array.slice(idx + 1)];
    };

    toggleDone = (id) => {
        this.setState( ({data}) => {
            return {
                data: this.toggleProperty(data, id, 'done')
            }
        })
    };

    toggleImportant = (id) => {
        this.setState( ({data}) => {
            return {
                data: this.toggleProperty(data, id, 'important')
            }
        })
    };

    searchItems = (items, slug) => {
        if (slug.length === 0) return items;
       return items.filter( el => el.task.toLowerCase().indexOf(slug.toLowerCase(), 0) !== -1 )
    };

    onSearchItems = (slug) => {
        this.setState({term: slug})
    };

    filterItems = (items, filterType) => {
        switch (filterType) {
            case 'done':
                return items.filter(el => el.done);
            case 'active':
                return items.filter(el => !el.done);
            case 'all':
                return items;
            default:
                return items;
        }
    };

    onFilterItems = (type) => {
        this.setState({filter: type});
    };

    render() {
        const {data, term, filter} = this.state;

        const totalDoneItem = data.filter( el => el.done === true).length;
        const totalTodoItem = data.length - totalDoneItem;
        const foundItems = this.filterItems(this.searchItems(data, term), filter);

        return (
            <div className='todo-app'>
                <Header todo={totalTodoItem} done={totalDoneItem}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchItems={this.onSearchItems}/>
                    <Filter filter={filter} onFilterItems={this.onFilterItems}/>
                </div>
                <TodoList tasks={foundItems}
                          onDeleteItem={this.deleteItem}
                          onToggleDone={this.toggleDone}
                          onToggleImportant={this.toggleImportant}/>
                <AddItemForm onAddItem={this.addItem} />
            </div>
        )
    }


};