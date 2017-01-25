/// <reference path="../typings/index.d.ts" />

import * as React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import { Main, Home } from './Main/main';

export interface IMainRouterState {}
export interface IMainRouterProps {}

export class MainRouter extends React.Component<IMainRouterProps, IMainRouterState> {

    render () {
        return <Router>
			<Route path="/" component={Main}>
				<IndexRoute component={Home}/>
			</Route>
		</Router>;
    }
}