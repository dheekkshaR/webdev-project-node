import React from "react";
import "./index.css";
export const NotificationDropdown = ({ notifications }) => {
  return (
    <div className="dropdown notification-dropdown">
      <div className="dropdown-body">
        <ul>
          {notifications.map((notification) => (
            <li>
              <div className="notification-content">
                <img
                  className="notification-image"
                  src={`../images/${notification.image}`}
                  alt="notification"
                />
                <div>
                <div className="notification-message">
                  {notification.message}
                </div>
                <div className="text-secondary">{notification.time}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
