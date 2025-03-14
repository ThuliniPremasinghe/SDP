import React from 'react';
import './ManagerDashboard.css';
import { Chart } from 'react-google-charts';


function ManagerDashboard() {
  const bookingTrendsData = [
    ['Date', 'Booked', 'Completed', 'Cancelled'],
    ['2023-01-01', 10, 8, 2],
    ['2023-01-15', 20, 18, 2],
    ['2023-02-01', 15, 12, 3],
    ['2023-02-15', 25, 22, 3],
  ];

  const bookingTrendsOptions = {
    title: 'Booking Trends',
    hAxis: { title: 'Date' },
    vAxis: { title: 'Number of Bookings' },
    legend: { position: 'bottom' },
    colors: ['#4285F4', '#34A853', '#EA4335'],
  };

  const topCategoryData = [
    ['Category', 'Percentage'],
    ['Double Room', 56],
    ['Single Room', 30],
    ['Deluxe Room', 14],
  ];

  const topCategoryOptions = {
    title: 'Top Category',
    pieHole: 0.4,
    colors: ['#4285F4', '#EA4335', '#FBBC04'],
  };

  return (
      <div className="manager-dashboard-container">
        
        {/* Main Content */}
        <main className="main-content">
          <header className="header">
            <div className="user-info">
              <span>Sunethra Premasinghe</span>
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="user-avatar"
              />
            </div>
          </header>
  
          <section id="dashboard" className="overview-section">
            <div className="overview-card">
              <h3>25</h3>
              <p>Total Bookings</p>
              <span>+10% More than last month</span>
            </div>
            <div className="overview-card">
              <h3>12</h3>
              <p>Completed Bookings</p>
              <span>+15% More than last month</span>
            </div>
            <div className="overview-card">
              <h3>4</h3>
              <p>Cancelled Bookings</p>
              <span>-5% Less than last month</span>
            </div>
            <div className="overview-card">
              <h3>35</h3>
              <p>Total Guests</p>
              <span>+20% More than last month</span>
            </div>
          </section>
  
          <section id="report" className="chart-section">
            <div className="chart-container">
              <Chart
                chartType="LineChart"
                width="100%"
                height="300px"
                data={bookingTrendsData}
                options={bookingTrendsOptions}
              />
            </div>
            <div className="chart-container">
              <Chart
                chartType="PieChart"
                width="100%"
                height="300px"
                data={topCategoryData}
                options={topCategoryOptions}
              />
            </div>
          </section>
        </main>
      </div>
    );
}

export default ManagerDashboard;
