import React from "react";
import "./CustomerDashboard.css";

function DashboardPage() {
  return (
    <div className="dashboard-container">
     

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <div className="user-info">
            <span>Thulini Premasinghe</span>
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="user-avatar"
            />
          </div>
          <button className="new-booking-btn">+ New Booking</button>
        </header>

        <section className="booking-section">
          <div className="current-booking">
            <h2>Current Booking</h2>
            <div className="booking-details">
              <div className="image-container">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Room"
                  className="room-image"
                />
                <button className="details-btn">See room details</button>
              </div>
              <div className="booking-info">
                <p><strong>Check-in:</strong> Tue, 21 Mar 2023</p>
                <p><strong>Check-out:</strong> Thu, 23 Mar 2023</p>
                <p><strong>Guests:</strong> 2 Adults</p>
                <p><strong>Room Plan:</strong> Extra Blanket</p>
                <p><strong>Guest Comments:</strong> No request</p>
                <p><strong>Extras:</strong> Breakfast, Laundry, Dinner</p>
              </div>
              <div className="booking-summary">
                <h3>Booking Summary</h3>
                <p>Room Total (night): <span>$300.00</span></p>
                <p>Extra Person: <span>$0.00</span></p>
                <p>Extras: <span>$30.00</span></p>
                <p>Subtotal: <span>$330.00</span></p>
                <p>Discount: <span>-$33.00</span></p>
                <p>Taxes: <span>$13.00</span></p>
                <p className="total">Total: <span>$320.00</span></p>
              </div>
            </div>
          </div>

          <div className="booking-history">
            <h2>Booking History</h2>
            <table>
              <thead>
                <tr>
                  <th>Room</th>
                  <th>No.</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Guest</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Deluxe</td>
                  <td>F1131</td>
                  <td>Thu, 23 Mar 2023</td>
                  <td>Sat, 25 Mar 2023</td>
                  <td>2</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;
