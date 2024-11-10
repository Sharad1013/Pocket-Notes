import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import AddGroup from "./AddGroup";
import NotesContainer from "./NotesContainer";
import "./styles/NotesApp.css";

const NotesApp = () => {
  const [showAddGroup, setShowAddGroup] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // Track window resize to update isMobile state

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
