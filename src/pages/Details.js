import React from 'react'
import "../components/css/Navbar.css"
import Head from '../components/Head'
import Detailbox from '../components/Detailbox'
import Photo from '../components/Photo'



const Details = () => {
    return (
        <div style={{ background: "#EEEEEE" }}>
            < Head />

            <Photo />
            <div style={{ marginTop: "-40rem", width: "100%", gap: "4rem", display: "flex", flexDirection: "column" }} >
                < Detailbox />
                <Detailbox />
            </div>

        </div>
    )
}

export default Details
