import logo from './logo.svg';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import FaceIcon from '@mui/icons-material/Face';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './App.css';


import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
export default class App extends Component {

  render() {
    return (
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    )

  }
}

