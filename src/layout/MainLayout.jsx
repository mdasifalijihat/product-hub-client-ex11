import React from 'react';
import Header from '../components/Page/shared/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Page/shared/Footer';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;