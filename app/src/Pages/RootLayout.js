import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/header';

const RootLayout = () => {
    return (
        <section>
            <Header />
            <Outlet />
        </section>
    );
}

export default RootLayout;
