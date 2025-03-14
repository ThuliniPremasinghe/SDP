import React from "react";
import "./AdminProfile.css";
import { AiOutlineUser } from "react-icons/ai";
import AdminSidebar from "./AdminSidebar"; // Import Sidebar

const AdminProfile = () => {
  return (
    <div className="profile-container">
      <AdminSidebar />
      <div className="profile-wrapper">
        <div className="profile-header">
          <h2>Profile</h2>
          <div className="user-info">
            <span className="user-name">Amitha Premasinghe</span>
            <AiOutlineUser className="user-icon" />
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-avatar">
              <AiOutlineUser className="avatar-icon" />
            </div>

            {/* User Info */}
            <div className="user-details">
              <p><strong>Name:</strong> Thulini Premasinghe</p>
              <p><strong>Address:</strong> No.88, Kandy, Sri Lanka</p>
              <p><strong>Phone No:</strong> 0767446639</p>
              <p><strong>NIC:</strong> 200255600751</p>
              <p><strong>DOB:</strong> 2002-02-25</p>
              <p><strong>Email:</strong> thulini.udari@gmail.com</p>
            </div>
          </div>

          {/* Change Password Section */}
          <div className="password-card">
            <h3>Change Password</h3>
            <div className="password-form">
              <label>Current Password:</label>
              <input type="password" />

              <label>New Password:</label>
              <input type="password" />

              <label>Confirm New Password:</label>
              <input type="password" />

              <button className="reset-btn">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
