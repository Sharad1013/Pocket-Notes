import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AddGroup from "./AddGroup";
import "./styles/NotesApp.css";

const NotesApp = () => {
  const [showAddGroup, setShowAddGroup] = useState(false);

  const handleAddGroupClick = () => {
    setShowAddGroup(true);
  };

  const handleCloseAddGroup = () => {
    setShowAddGroup(false);
  };

  return (
    <div className="notes-app">
      <Sidebar onAddGroupClick={handleAddGroupClick} />
      {showAddGroup && <AddGroup onClose={handleCloseAddGroup} />}
    </div>
  );
};

export default NotesApp;
