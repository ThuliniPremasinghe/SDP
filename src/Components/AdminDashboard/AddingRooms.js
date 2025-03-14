import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar"; // Import Sidebar
import "./AddingRooms.css";

function AddingRooms() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [villaLocation, setVillaLocation] = useState("");
  const [roomType, setRoomType] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
   const [roomDescription, setRoomDescription] = useState("");

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle the form submission along with other form values
    console.log("Villa Location:", villaLocation);
    console.log("Room Type:", roomType);
    console.log("Price per Day:", pricePerDay);
    console.log("Room Description:", roomDescription);
    console.log("Selected files:", selectedFiles);
    alert("Room added successfully!");
  };

  return (
    <div className="add-room-container">
       <AdminSidebar />
       <div className="room-wrapper">
      <form className="add-room-form" onSubmit={handleSubmit}>
        {/* Title inside the form */}
        <h2 className="title">Add New Room</h2>

        <label className="label">
          Villa Location
          <input
            type="text"
            value={villaLocation}
            onChange={(e) => setVillaLocation(e.target.value)}
            placeholder="Enter Villa  Address"
            className="input"
          />
        </label>

        <label className="label">
          Room Type
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="input"
          >
            <option value="" disabled>
              Select Room Type
            </option>
            <option value="Family">Family</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Double">Double</option>
          </select>
        </label>

        <label className="label">
            Price per Day ($)
            <input
              type="text"
              value={pricePerDay}
              onChange={(e) => setPricePerDay(e.target.value)}
              placeholder="Enter Price Per Day"
              className="input"
            />
          </label>

          <label className="label">
            Room Description
            <textarea
              value={roomDescription}
              onChange={(e) => setRoomDescription(e.target.value)}
              placeholder="Enter A Short Description"
              className="input textarea"
            ></textarea>
          </label>

        <div className="amenities">
          <p className="subtitle">Amenities</p>
          <label className="checkbox">
            <input type="checkbox" /> Attached Bathroom
          </label>
          <label className="checkbox">
            <input type="checkbox" /> Air Conditioning
          </label>
          <label className="checkbox">
            <input type="checkbox" /> Television
          </label>
          <label className="checkbox">
            <input type="checkbox" /> Balcony
          </label>
          <label className="checkbox">
            <input type="checkbox" /> Refrigerator
          </label>
          <label className="checkbox">
            <input type="checkbox" /> Washing Machine
          </label>
          <label className="checkbox">
            <input type="checkbox" /> Free WiFi
          </label>
          
        </div>

        <label className="label">
          Room Images
          <input
            type="file"
            accept="image/*"
            multiple
            className="input"
            onChange={handleFileChange}
          />
        </label>

        <div className="terms">
          <label className="checkbox">
            <input type="checkbox" /> I have read and agreed to the Terms and Conditions and Privacy Policy
          </label>
        </div>

        <button type="submit" className="submit-button">Add</button>
      </form>

      {selectedFiles.length > 0 && (
        <div className="preview-container">
          <h3>Preview Selected Images:</h3>
          <div className="image-preview">
            {selectedFiles.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={`Preview ${index}`}
                className="preview-image"
              />
            ))}
          </div>
        </div>
      )}
    </div>
     </div>
  );
}

export default AddingRooms;
