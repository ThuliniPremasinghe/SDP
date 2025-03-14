import React, { useEffect, useState } from "react";
import { AiOutlineCalendar, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineUser } from "react-icons/ai";
import { PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";
import "./AdminDashboard.css";

const COLORS = ["#111", "#9b59b6", "#3498db"];

// Sample Data (Fallback in case API is unavailable)
const sampleData = {
  totalBookings: 150,
  completedBookings: 120,
  cancelledBookings: 30,
  totalGuests: 450,
  bookingTrends: [
    { name: "Jan", bookings: 20 },
    { name: "Feb", bookings: 40 },
    { name: "Mar", bookings: 35 },
    { name: "Apr", bookings: 50 },
    { name: "May", bookings: 70 },
    { name: "Jun", bookings: 65 }
  ],
  bookingCategories: [
    { name: "Villa", value: 30 },
    { name: "Room", value: 50 },
    { name: "Event", value: 20 }
  ]
};

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState(sampleData); // Initialize with sample data

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const backendPort = 3012; // Change to your actual backend port
        const response = await axios.get(`http://localhost:${backendPort}/api/dashboard`);

        console.log("Fetched Dashboard Data:", response.data); // Debugging log
        setDashboardData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-container">
      <AdminSidebar />
      <div className="dashboard-content">
        <header>
          <h2>Dashboard</h2>
          <span className="user">Amitha Premasinghe <AiOutlineUser className="user-icon" /></span>
        </header>

        {/* Overview Cards */}
        <div className="overview">
          <div className="card">
            <AiOutlineCalendar className="icon" />
            <h3>{dashboardData.totalBookings}</h3>
            <p>Upcoming Bookings</p>
          </div>
          <div className="card">
            <AiOutlineCheckCircle className="icon" />
            <h3>{dashboardData.completedBookings}</h3>
            <p>Completed Bookings</p>
          </div>
          <div className="card">
            <AiOutlineCloseCircle className="icon" />
            <h3>{dashboardData.cancelledBookings}</h3>
            <p>Cancelled Bookings</p>
          </div>
          <div className="card">
            <AiOutlineUser className="icon" />
            <h3>{dashboardData.totalGuests}</h3>
            <p>Total Guests</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts">
          {/* Booking Trends Line Chart */}
          <div className="chart">
            <h3>Booking Trends</h3>
            {dashboardData.bookingTrends.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={dashboardData.bookingTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="bookings" stroke="#3498db" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p>No booking trend data available</p>
            )}
          </div>

          {/* Room Categories Pie Chart */}
          <div className="chart">
            <h3>Booking Categories</h3>
            {dashboardData.bookingCategories.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={dashboardData.bookingCategories} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
                    {dashboardData.bookingCategories.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p>No room category data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
