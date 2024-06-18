import React from 'react';
import { useLocation } from 'react-router-dom';

const RequireAdmin = ({ children }) => {
    const userRole = localStorage.getItem("userRole");
    const location = useLocation();

    // Ensure userRole exists and includes "ROLE_ADMIN"
    if (!userRole || !userRole.includes("ROLE_ADMIN")) {
        return (
            <div className='container mt-3'>
                <h2>Unauthorized user. Only admins are allowed to access this functionality.</h2>
            </div>
        );
    }

    // Render children if user is an admin
    return children;
}

export default RequireAdmin;
