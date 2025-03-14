import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsGrid1X2Fill } from "react-icons/bs";
import { AiOutlineBarChart, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai"; // Villa Icon
import { FaBed } from "react-icons/fa"; // Room Icon

import "./AdminSidebar.css";

const AdminSidebar = () => {
  const [isOpen] = useState(true);
  const [isManagementOpen, setIsManagementOpen] = useState(false);

  const toggleManagementDropdown = () => {
    setIsManagementOpen(!isManagementOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <h2 className="sidebar-logo">Villa Thus</h2>
      <ul className="nav">
        <li>
          <Link to="/admindashboard">
            <BsGrid1X2Fill className="icon" /> {isOpen && <span>Dashboard</span>}
          </Link>
        </li>

        <li>
  <Link to="/addingvilla">
    <AiOutlineHome className="icon" /> {isOpen && <span>Add Villa</span>}
  </Link>
</li>

<li>
  <Link to="/addingrooms">
    <FaBed className="icon" /> {isOpen && <span>Add Room</span>}
  </Link>
</li>

        {/* Management Dropdown - No Arrow */}
        <li className="management">
          <div className="dropdown-toggle" onClick={toggleManagementDropdown}>
            <MdOutlineManageAccounts className="icon" /> 
            {isOpen && <span>Management</span>}
          </div>
          {isOpen && isManagementOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/adminbookingmanagement">Booking Management</Link>
              </li>
              <li>
                <Link to="/villa-management">Villa Management</Link>
              </li>
              <li>
                <Link to="/staff-management">Staff Management</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/report">
            <AiOutlineBarChart className="icon" /> {isOpen && <span>Report</span>}
          </Link>
        </li>

        <li>
          <Link to="/adminprofile">
            <AiOutlineUser className="icon" /> {isOpen && <span>Profile</span>}
          </Link>
        </li>
        <li className="logout">
          <Link to="/HomePage">
            <AiOutlineLogout className="icon" /> {isOpen && <span>Log Out</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
