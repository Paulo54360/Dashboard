import React from 'react';
import { createBrowserHistory as history } from 'history';


class Search extends React.Component {
   constructor(props) {
        super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/user/${this.refs.userInput.value}`)
    } 

    render() {
        return (
            <div className="search-page">
                <h2>Entrer un pseudo GitHub</h2>
                <form onSubmit={this._handleSubmit}>
                    <input ref="userInput" className="search-page__input" type="text" />
                    <button className="search-page__button">Search</button>
                </form>
            </div>
        );
    }
};

export default Search;