import React, { Component } from 'react'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import "./css/Navbar.css"

import PropTypes from 'prop-types'

export class Box extends Component {

    render() {
        let { title, icon, values } = this.props;
        return (
            <div className='cards'>
                <div className="boxx">
                    <div className="innerbox"> {icon} </div>
                    <h4> {title}</h4>
                    <h2>{values}</h2>

                </div>
            </div>
        )
    }
}

export default Box
