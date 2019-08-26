import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBarComponent extends Component {

    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav ml-auto margin-nav">
                        <li className="nav-item active">
                            <Link to="/groceries/lists">Grocery Lists</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
