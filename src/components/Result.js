import React from 'react'
import "./css/Navbar.css"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Result = ({ handleChange, alignment, setAlignment }) => {
    return (
        <div className="box-container">
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                sx={{ marginLeft: "1.5rem", height: "2rem", marginTop: "1rem", outline: "none", border: "1px solid #00ACC1", color: "#00ACC1", }}
            >
                <ToggleButton value="web">ABOVE 1 MILLION</ToggleButton>
                <ToggleButton value="android">BELOW 1 MILLION</ToggleButton>
            </ToggleButtonGroup>
            <p>Select a pillar</p>
            <select name="select" id="2211">
                <option value="0"> All</option>
                <option value="1"> Demographics </option>
                <option value="2"> Population Density</option>
                <option value="3"> No. Of days of extreme wheather</option>
                <option value="4">Quality of life </option>
            </select>
            <div className="heading">

                <p>State</p>
                <select name="select" id="1122">
                    <option value="0">All</option>
                    <option value="1"> India </option>
                    <option value="2"> United State</option>
                    <option value="3"> England </option>
                    <option value="4"> Shri lanka  </option>
                </select>
            </div>
            <div className="btn-2">
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    sx={{ marginLeft: "22rem", marginBottom: "15rem", height: "1rem" }}
                >
                    <ToggleButton value="web">Chart view</ToggleButton>
                    <ToggleButton value="android">Map view</ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>
    )
}

export default Result
