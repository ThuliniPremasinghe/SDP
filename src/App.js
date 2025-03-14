import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from "./Components/Login/Login";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import HomePage from "./Components/HomePage/HomePage";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import CustomerDashboard from "./Components/CustomerDashboard/CustomerDashboard";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import AdminSidebar from "./Components/AdminDashboard/AdminSidebar";
import AdminBookingManagement from "./Components/AdminDashboard/AdminBookingManagement";
import AdminVillaManagement from "./Components/AdminDashboard/AdminVillaManagement";
import AdminManagement from "./Components/AdminDashboard/AdminManagement";
import AdminProfile from "./Components/AdminDashboard/AdminProfile";
import ManagerDashboard from "./Components/ManagerDashboard/ManagerDashboard";
import AddingRooms from "./Components/AdminDashboard/AddingRooms";
import AddingVilla from "./Components/AdminDashboard/AddingVilla";
import RoomBookingForm from "./Components/CustomerDashboard/RoomBookingForm";
import Feedback from "./Components/CustomerDashboard/Feedback";



export default function Main() {
    return (
        <BrowserRouter>
          <Routes>
              <Route path='/register' element={<RegisterForm/>}></Route>
              <Route path='/HomePage' element={<HomePage/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
              <Route path='/customerDashboard' element={<CustomerDashboard/>}></Route>
              <Route path='/adminDashboard' element={<AdminDashboard/>}></Route>
              <Route path='/adminsidebar' element={<AdminSidebar/>}></Route>
              <Route path="/adminbookingmanagement" element={<AdminBookingManagement />} />
              <Route path="/adminvillamanagement" element={<AdminVillaManagement />} />
              <Route path="/adminmanagement" element={<AdminManagement />} />
              <Route path="/adminprofile" element={<AdminProfile />} />
              <Route path='/managerDashboard' element={<ManagerDashboard/>}></Route>
              <Route path="/addingRooms" element={<AddingRooms />} />
              <Route path="/addingVilla" element={<AddingVilla />} />
              <Route path="/roombookingform" element={<RoomBookingForm />} />
              <Route path="/feedback" element={<Feedback />} />
              </Routes>
      </BrowserRouter>
  )
}