import React, { Component } from 'react'
import {FaAlignRight, FaHome, FaFileImage, FaCode, FaEthernet} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// import { createStore } from 'redux';

import logo from '../Images/free.jpg';
import './style.css';


// const store = createStore(reducer, initialState);

class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState( {isOpen: !this.state.isOpen} )
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="click the icon" title="click the icon" className="logo" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen? "nav-links show-nav" : "nav-links" }>
                        <li>
                            <Link to="/" className="primary">
                                <FaHome />Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills" className="primary">
                                <FaFileImage />About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="primary">
                                <FaEthernet />Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="primary">
                                <FaCode />Project
                            </Link>
                        </li>                        
                    </ul>
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {

}

export default Navbar