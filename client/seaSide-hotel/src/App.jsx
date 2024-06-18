import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
// import './App.css'
import AddRoom from './components/room/AddRoom';
import ExistingRooms from "./components/room/ExistingRooms";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import EditRoom from "./components/room/EditRoom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import RoomListing from "./components/room/RoomListing";
import Admin from "./components/admin/Admin";
import Checkout from "./components/bookings/Checkout";
import BookingSuccess from "./components/bookings/BookingSuccess";
import Bookings from "./components/bookings/Bookings";
import FindBooking from "./components/bookings/FindBooking";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import Profile from "./components/auth/Profile";
import { AuthProvider } from "./components/auth/AuthProvider";
import Logout from "./components/auth/Logout";
import RequireAuth from "./components/auth/RequireAuth";
import RequireAdmin from "./components/auth/RequireAdmin";

function App() {

    return (
        <AuthProvider>
            <main>
                <Router>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/edit-room/:roomId" element={
                            <RequireAdmin>
                                <EditRoom/>
                            </RequireAdmin>
                        }/>
                        <Route path="/existing-rooms" element={
                            <RequireAdmin>
                                <ExistingRooms/>
                            </RequireAdmin>
                        }/>
                        <Route path="/add-room" element={
                            <RequireAdmin>
                                <AddRoom/>
                            </RequireAdmin>
                        }/>

                        <Route 
                            path="/book-room/:roomId" 
                            element={
                                <RequireAuth>
                                    <Checkout/>
                                </RequireAuth>
                            }
                        />

                        <Route path="/admin" element={
                            <RequireAdmin>
                                <Admin/>
                            </RequireAdmin>
                        }/>

                        <Route path="/browse-all-rooms" element={<RoomListing/>}/>
                        <Route path="/booking-success" element={<BookingSuccess/>}/>
                        <Route path="/existing-bookings" element={
                            <RequireAdmin>
                                <Bookings/>
                            </RequireAdmin>
                        }/>
                        <Route path="/find-booking" element={<FindBooking/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Registration/>}/>

                        <Route path="/profile" element={
                            <RequireAuth>
                                <Profile/>
                            </RequireAuth>
                        }/>
                        <Route path="/logout" element={
                            <RequireAuth>
                                <Logout/>
                            </RequireAuth>
                        }/>

                    </Routes>
                </Router>
                <Footer/>
            </main>
        </AuthProvider>
    
    )
}

export default App;
