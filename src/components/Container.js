import mapboxgl from 'mapbox-gl';
import React from 'react'
import "./css/Navbar.css"
import Table from './Table';
import { useRef, useEffect, useState } from 'react';
import Result from './Result';
import Map2 from './Map2';
import Chartview from './Chartview';
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hyaW9wIiwiYSI6ImNsZzZtbnducDBlenozZHFsMDBrZjAwcGsifQ.TmHYfxG-SvCgQhpE_nYHlw';


export default function Container() {

    const [alignment, setAlignment] = React.useState('android');
    const [display, setDisplay] = useState(true)
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        setDisplay(!display)
    };

    return (
        <div className='main-container'>

            <Result handleChange={handleChange} alignment={alignment} setAlignment={setAlignment} />
            {display ?
                <Map2 /> :
                <Chartview />
            }
            <Table />



        </div>
    )
}
