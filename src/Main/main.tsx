/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import { Link } from 'react-router';
import {TodoItem} from './todoItem';

interface ITodo {
    description: string;
    key: number;
}

export interface IHomeState {
    newItem?: {
        description: string;
    };
    todoList?: ITodo[];
}

export interface IHomeProps {}

export class Home extends React.Component<IHomeProps, IHomeState> {

    state: IHomeState = {newItem: {description: ''}, todoList: []}

    constructor () {
        super();
        this.changeName = this.changeName.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    changeName (e: any) {
        this.setState({
            newItem: {
                description: e.target.value
            }
        });
    }

    addItem () {
        var list = this.state.todoList;
        list.push({
            description: this.state.newItem.description,
            key: new Date().getTime()
        });
        this.setState({
            todoList: list,
            newItem: {description: ''}
        });
    }

    removeItem (item: ITodo) {
        var list = this.state.todoList.filter(i => i.key !== item.key);
        this.setState({todoList: list});
    }

    render () {
        var todoItems = this.state.todoList.map(item => {
            return <TodoItem key={item.key} item={item} onRemove={this.removeItem} ></TodoItem>;
        });
        return (
            <div>
				<Link to="/stuff">stuff</Link>
                <div>
                    <input type="text" placeholder="input new item" value={this.state.newItem.description} onChange={this.changeName} />
                    <button onClick={this.addItem} >add</button>
                </div>
                <ul>{todoItems}</ul>
            </div>
        );
    }
}

export interface IMainState {}
export interface IMainProps {}

export class Main extends React.Component<IMainProps, IMainState> {
	
	render() {
		return <div> {this.props.children} </div>
	}
}