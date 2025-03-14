import React, { useState } from "react";
import "./RoomBookingForm.css";

const RoomBookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    nic: "",
    dob: "",
    address: "",
    guestCount: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfRooms: "",
    mealPlan: "",
    transportation: "",
    specialRequest: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Booking submitted!");
  };

  return (
    <div className="form-container">
      <h2>Room Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>NIC</label>
          <input
            type="text"
            name="nic"
            value={formData.nic}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Guest Count</label>
          <input
            type="number"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Check-In Date</label>
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Check-Out Date</label>
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Number of Rooms</label>
          <input
            type="number"
            name="numberOfRooms"
            value={formData.numberOfRooms}
            onChange={handleChange}
            required
          />
          
        </div>
        <div className="form-group">
          <label>Meal Plan (Optional)</label>
          <select
            name="mealPlan"
            value={formData.mealPlan}
            onChange={handleChange}
          >
            <option value="">Select Meal Plan</option>
            <option value="Self Service">Self Service</option>
            <option value="Full Board">Full Board</option>
          </select>
        </div>
        <div className="form-group">
          <label>Transportation (Optional)</label>
          <select
            name="transportation"
            value={formData.transportation}
            onChange={handleChange}
          >
            <option value="">Select Transportation</option>
            <option value="Van - 10 seats">Van - 10 seats</option>
            <option value="Car - 4 seats">Car - 4 seats</option>
          </select>
        </div>
        <div className="form-group">
          <label>Special Request</label>
          <textarea
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Total Cost</label>
          <input type="text" value="LKR 65,000" readOnly />
        </div>
        <div className="checkbox-group">
  <input
    type="checkbox"
    name="agreeTerms"
    checked={formData.agreeTerms}
    onChange={handleChange}
    required
  />
  <label>
    I have read and agreed to the Terms and Conditions and Privacy Policy
  </label>
</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" className="submit-btn">
            BOOK
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoomBookingForm;
