import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <header>
                    <h2 className="page-title text-center">
                        <Link to="/">Soccer <br /> Legends</Link>
                    </h2>
                </header>
                <div className="app-content">{this.props.children}</div>

                <footer className="text-center">
                    <p role="link">
                        Made by <a target="_blank" href="https://github.com/zavjs">H. Zavareze</a><br />
                        <span>Check out the</span>
                        <a aria-label="This project's Github Repository"
                           target="_blank" href="https://github.com/zavjs/SoccerStars">
                             Github Repository
                        </a>
                    </p>
                </footer>
            </div>
        );
    }
}