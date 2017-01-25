import * as React from 'react';
import { Link } from 'react-router';

export interface IStuffState {}

export interface IStuffProps {}

export class Stuff extends React.Component<IStuffProps, IStuffState> {

    render () {
        return (
			<div>
				<Link to="/">main</Link>
				<div> HELLO WORLD!! </div>
			</div>
        );
    }
}