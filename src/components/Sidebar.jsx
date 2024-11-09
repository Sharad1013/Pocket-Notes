import React from "react";
import "./styles/Sidebar.css";
import { useGroup } from "../context/store";
import GroupOutlet from "./GroupOutlet";

const Sidebar = ({ onAddGroupClick }) => {
  const { groups, setSelectedGroup } = useGroup();

  return (
    <div className="sidebar">
      <h1>Pocket Notes</h1>
      <div className="groups-list">
        {groups && groups.length > 0
          ? groups.map((group, index) => (
              <div
                className="single-group"
                key={index}
                onClick={() => setSelectedGroup(group)}
              >
                <GroupOutlet name={group.name} color={group.color} />
              </div>
            ))
          : // <h1 className="empty-group">Add a new Group</h1>
            null}
      </div>
      <button className="add-button" onClick={onAddGroupClick}>
        +
      </button>
    </div>
  );
};

export default Sidebar;
