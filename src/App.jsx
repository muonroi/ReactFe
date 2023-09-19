import React from 'react';
import AppBar from './scenes/global/AppBar';
import Banner from './scenes/global/Banner';
import NavBar from './scenes/global/NavBar';
import Footer from './scenes/global/Footer';
import Copyright from './scenes/global/Copyright';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <AppBar />
      <div className='container'>
        <Banner />
        <NavBar />
        <Outlet />
        <Footer />
      </div>
      <Copyright />
    </div>
  );
}
