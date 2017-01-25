/// <reference path="../typings/index.d.ts" />

import * as React from 'react';
import { Router, IndexRoute, Route, browserHistory, hashHistory } from 'react-router'
import { Main, Home } from './Main/main';

export class MainRouter extends React.Component<any, any> {

    render () {
        return <Router history={hashHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={Home}/>
			</Route>
		</Router>;
    }
}