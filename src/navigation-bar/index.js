import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import SearchBar from "./search-bar";
import {NotificationDropdown} from "../dropdown-bar/notification";
import {ProfileDropdown} from "../dropdown-bar/profile";
import {profiles, notifications} from '../data'

const NavigationBar = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearchBox(!showSearchBox);
  };

  const handleBellIconClick = () => {
    setShowNotificationDropdown(!showNotificationDropdown);
  };

  const handleUserIconClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <div className="navbar_main">
      <div className="netflix_logo">
        <img src="../images/logo.png" alt="neflix_logo" height="60px"></img>
      </div>
      <div className="nav_items">
        <div className="item">Home</div>
        <div className="item">TV Shows</div>
        <div className="item">Movies</div>
        <div className="item">News & Popular</div>
        <div className="item">My List</div>
        <div className="item">Browse by Languages</div>
      </div>
      <div className="right-icons">
        {!showSearchBox && (
          <FontAwesomeIcon
            icon={faSearch}
            className="icon"
            onClick={handleSearchIconClick}
          />
        )}
        {showSearchBox && <SearchBar />}
        <FontAwesomeIcon
          icon={faBell}
          className="icon"
          onClick={handleBellIconClick}
        />
        {showNotificationDropdown && <NotificationDropdown notifications={notifications}/>}
        <FontAwesomeIcon
          icon={faUserCircle}
          className="icon"
          onClick={handleUserIconClick}
        />
        {showProfileDropdown && <ProfileDropdown profiles={profiles}/>}
      </div>
    </div>
  );
};
export default NavigationBar;
