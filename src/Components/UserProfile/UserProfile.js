import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        {/* Profile Picture */}
        <div className="profile-picture">
          <img src="UserProfile.jpg" alt="avatar" />
          
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          <p>
            <span className="label">Name</span> : Thulini Premasinghe
          </p>
          <p>
            <span className="label">Address</span> : No.88, Kandy, Sri Lanka
          </p>
          <p>
            <span className="label">Phone No</span> : 0767446639
          </p>
          <p>
            <span className="label">NIC</span> : 200255600751
          </p>
          <p>
            <span className="label">DOB</span> : 2002-02-25
          </p>
          <p>
            <span className="label">Email</span> : thulini.udari@gmail.com
          </p>
        </div>
      </div>

      {/* Password Reset Section */}
      <div className="profile-password-reset">
        <h3>Change Password</h3>
        <form className="profile-password-form">
          <div>
            <label htmlFor="current-password">Current Password:</label>
            <input type="password" id="current-password" />
          </div>
          <div>
            <label htmlFor="new-password">New Password:</label>
            <input type="password" id="new-password" />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm New Password:</label>
            <input type="password" id="confirm-password" />
          </div>
          <button type="submit" className="reset-button">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
