import { Button } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";


class AppGitHub extends React.Component {
    render() {
        return (
            <div className="main-app">
                <header className="main-header">
                    <h1><Link to="/">React GitHub Project</Link></h1>
                </header>
                <main className="main-content">
                    {this.props.children}
                </main>
               <Button/>
            </div>
        );
    }
};

export default AppGitHub;