import React from 'react'
import { Outlet } from 'react-router-dom';
export default function Dashboard(props) {
    return (
        <>
        <div>Dashboard</div>
        <Outlet/>
        </>
    );
}