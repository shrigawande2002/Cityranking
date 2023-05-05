import React, { Component } from 'react'
import "./css/Navbar.css";

export class Navbar extends Component {


    render() {
        return (
            <div>
                <nav>

                    <div className='navbar'>
                        <div className="logo">
                            <div className=" nv">
                                <p> City Ranking 2023</p>
                            </div>

                        </div>
                        <ul>
                            <li> <a href="#">Home</a></li>
                            <li> <a href="#">Dashboard</a></li>
                            <li> <a href="#">Citizenspeak</a></li>
                            <li> <a href="#">Resources</a></li>
                            <li> <a href="#">Gallery</a></li>
                            <li> <a href="#">contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
