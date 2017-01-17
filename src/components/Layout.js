import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <header>
                    <Link to="/">
                        <h2>Soccer Cracks</h2>
                    </Link>
                </header>
                <div className="app-content">{this.props.children}</div>
            </div>
        );
    }
}