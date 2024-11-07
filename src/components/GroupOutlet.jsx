// GroupOutlet.jsx
import React from "react";
import "./styles/GroupOutlet.css"; // Assuming you have some styling for this component

const GroupOutlet = ({ name, color }) => {
  // Create initials from the group name
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="group-outlet">
      <div className="group-logo" style={{ backgroundColor: color }}>
        {initials}
      </div>
      <div className="group-name">
        <span className="group-name">{name}</span>
      </div>
    </div>
  );
};

export default GroupOutlet;
