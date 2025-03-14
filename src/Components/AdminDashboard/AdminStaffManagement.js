import React, { useState, useEffect } from "react";
import "./AdminStaffManagement.css";
import { AiOutlineUser } from "react-icons/ai";
import AdminSidebar from "./AdminSidebar"; // Import Sidebar

const AdminBookingManagement = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetching sample booking data (Replace with API call)
    setBookings([
      {
        id: 22,
        manager: "Tharin Perera",
        
        villa: "Kandy",
        type: "Rooms",
        manager: "Asanka Dias",
      },
      {
        id: 23,
        customer: "Vinu Herath",
        checkIn: "03-11-2024",
        checkOut: "06-11-2024",
        villa: "Kandy",
        type: "Rooms",
        manager: "Asanka Dias",
      },
      {
        id: 24,
        customer: "Nalin Fernando",
        checkIn: "05-11-2024",
        checkOut: "05-11-2024",
        villa: "Galle",
        type: "Event",
        manager: "Demi Herath",
      },
      {
        id: 25,
        customer: "Apsara Gamage",
        checkIn: "07-11-2024",
        checkOut: "10-11-2024",
        villa: "Kandy",
        type: "Villa",
        manager: "Asanka Dias",
      },
      {
        id: 26,
        customer: "Pubudu Dias",
        checkIn: "11-11-2024",
        checkOut: "13-11-2024",
        villa: "Galle",
        type: "Villa",
        manager: "Demi Herath",
      },
    ]);
  }, []);

  return (
    <div className="booking-container">
      <AdminSidebar />
      <div className="booking-wrapper">
        <div className="booking-header">
      <h2>Booking Management</h2>
      <div className="user-info">
                  <span className="user-name">Amitha Premasinghe</span>
                  <AiOutlineUser className="user-icon" />
                </div>
      </div>

      <table className="booking-table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Customer Name</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Villa</th>
            <th>Booking Type</th>
            <th>Manager</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.customer}</td>
              <td>{booking.checkIn}</td>
              <td>{booking.checkOut}</td>
              <td>{booking.villa}</td>
              <td>{booking.type}</td>
              <td className="manager-name">{booking.manager}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AdminBookingManagement;
