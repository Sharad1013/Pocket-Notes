import React, { useState, useEffect, useRef } from "react";
import "./styles/Sidebar.css"; // Import the CSS for Sidebar
import { useGroup } from "../context/store";
import GroupOutlet from "./GroupOutlet";

const arr = [
  {
    name: "Group One",
    color: "#B38BFA",
  },
  {
    name: "Group Two",
    color: "#FF79F2",
  },
  {
    name: "Group Thr",
    color: "#16008b",
  },
  {
    name: "Group Fou",
    color: "#43E6FC",
  },
  {
    name: "Group Fiv",
    color: "#F19576",
  },
  {
    name: "My Prev Group ",
    color: "#F19576",
  },
  {
    name: "Group Six",
    color: "#0047FF",
  },
  {
    name: "Group Sev",
    color: "#6691FF",
  },
  {
    name: "Group Eig",
    color: "#16008b",
  },
  {
    name: "Group Eig",
    color: "#16008b",
  },
  {
    name: "Group Eig",
    color: "#16008b",
  },
  {
    name: "Group Eig",
    color: "#16008b",
  },
  {
    name: "Group Eig",
    color: "#16008b",
  },
  {
    name: "Group Eig",
    color: "#16008b",
  },
  {
    name: "Group Eig",
    color: "#16008b",
  },
  {
    name: "Group Eig",
    color: "#16008b",
  },
  {
    name: "Group Eig",
    color: "#16008b",
  },
  {
    name: "Group Eig",
    color: "#16008b",
  },
];

const Sidebar = ({ onAddGroupClick }) => {
  // Sidebar.js
  const { groups } = useGroup();
  // console.log(groups);
  return (
    <div className="sidebar">
      <h1>Pocket Notes</h1>
      <div className="groups-list">
        {groups && groups.length > 0 ? (
          groups.map((group, index) => (
            <div className="single-group" key={index}>
              <GroupOutlet name={group.name} color={group.color} />
            </div>
          ))
        ) : (
          <h1 className="empty-group">Add a new Group</h1>
        )}
      </div>
      <button className="add-button" onClick={onAddGroupClick}>
        +
      </button>
    </div>
  );
};

export default Sidebar;
