import React from "react";
import "./index.css"

export const ProfileDropdown = ({ profiles }) => {
    return (
      <div className="dropdown profile-dropdown">
        <div>
          <ul>
            {profiles.map((profile) => (
              <li key={profile.id}>
                <img src={profile.avatar} alt={profile.name} />
                {profile.name}
              </li>
            ))}
          </ul>
          <button>Sign Out</button>
        </div>
      </div>
    );
  };