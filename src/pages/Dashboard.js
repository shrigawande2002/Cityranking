import React from 'react'
import Navbar from '../components/Navbar'
import Box from '../components/Box'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import FaceIcon from '@mui/icons-material/Face';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../components/css/Navbar.css'
import Footer from '../components/Footer'
import Container from '../components/Container';





const Dashboard = () => {
    return (
        <>
            <div className='container' style={{ background: "#EEEEEE" }}>

                <div className="navbar">   <Navbar /> </div>
                <div className="card">
                    <Box title="Number Of Cities " values="111" icon={<LocationCityIcon />} />
                    <Box title="Avarage City Score" values="58.16" icon={<AutoGraphIcon />} />
                    <Box title="Citizens feedback" values="3.2 billion" icon={<FaceIcon />} />
                    <Box title="Social media hits" values="1.6 million" icon={<FavoriteIcon />} />
                </div>
                <Container />
                <Footer />
            </div>


        </>
    )
}

export default Dashboard
