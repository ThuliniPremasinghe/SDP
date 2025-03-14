import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "./AddingVilla.css";

function AddVilla() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [villaLocation, setVillaLocation] = useState("");
  const [distanceToCity, setDistanceToCity] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [villaDescription, setVillaDescription] = useState("");

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected files:", selectedFiles);
    console.log("Distance to City:", distanceToCity);
    console.log("Price per Day:", pricePerDay);
    console.log("Villa Description:", villaDescription);
    alert("Villa added successfully!");
  };

  return (
    <div className="add-villa-container">
      <AdminSidebar />
      <div className="villa-wrapper">
        <form className="add-villa-form" onSubmit={handleSubmit}>
          <h2 className="title">Add New Villa</h2>

          <label className="label">
            Villa Location
            <input
              type="text"
              value={villaLocation}
              onChange={(e) => setVillaLocation(e.target.value)}
              placeholder="Enter Villa Address"
              className="input"
            />
          </label>

          <label className="label">
            Distance to City
            <select
              value={distanceToCity}
              onChange={(e) => setDistanceToCity(e.target.value)}
              className="input"
            >
              <option value="">Select Distance</option>
              <option value="Less than 1 km">Less than 1 km</option>
              <option value="1-5 km">1-5 km</option>
              <option value="5-10 km">5-10 km</option>
              <option value="10-20 km">10-20 km</option>
              <option value="More than 20 km">More than 20 km</option>
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

<div className="amenities">
          <p className="subtitle">Amenities</p>
          <label className="checkbox">
            <input type="checkbox" /> Pool
          </label>
          <label className="checkbox">
            <input type="checkbox" /> Beach
          </label>
          <label className="checkbox">
            <input type="checkbox" /> Kitchen
          </label>
          <label className="checkbox">
            <input type="checkbox" /> Dedicated Workplace
          </label>
          <label className="checkbox">
            <input type="checkbox" /> Air Conditioning
          </label>
          <label className="checkbox">
            <input type="checkbox" /> Parking
          </label>
          <label className="checkbox">
            <input type="checkbox" /> Room Service
          </label>
        </div>

          <label className="label">
            Villa Description
            <textarea
              value={villaDescription}
              onChange={(e) => setVillaDescription(e.target.value)}
              placeholder="Enter A Short Description"
              className="input textarea"
            ></textarea>
          </label>

          <label className="label">
            Add Villa Images
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
              <input type="checkbox" required /> I have read and agreed to the Terms and
              Conditions and Privacy Policy
            </label>
          </div>

          <button type="submit" className="submit-button">
            Add
          </button>
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

export default AddVilla;
