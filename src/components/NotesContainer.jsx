import React, { useEffect, useState } from "react";
import { useGroup } from "../context/store";
import "./styles/NotesContainer.css";

const NotesContainer = () => {
  const {
    selectedGroup,
    addNoteToGroup,
    getNotesForGroup,
    color,
    setSelectedGroup,
  } = useGroup();


  const [noteContent, setNoteContent] = useState("");


  const handleAddNote = () => {
    if (selectedGroup && noteContent.trim() !== "") {
      addNoteToGroup(selectedGroup.name, noteContent);
      setNoteContent(""); 
    }
  };

  const handleBackClick = () => {
    setSelectedGroup(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddNote();
    }
  };

  // Retrieve notes for the selected group
  const notes = selectedGroup ? getNotesForGroup(selectedGroup.name) : [];

  const initials = selectedGroup?.name
    .split(" ")
    .filter((_, index, arr) => index === 0 || index === arr.length - 1) 
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="notes-container">
      {selectedGroup ? (
        <>
          <div
            className="notes-container-group-heading"
            style={{ backgroundColor: "#001F8B" }}
          >
            <button className="back-button" onClick={handleBackClick}>
              <img src="Back.png" alt="Back" />
            </button>
            <div
              className="notes-container-group-logo"
              style={{ backgroundColor: selectedGroup?.color }}
            >
              {initials}
            </div>
            <div
              className="notes-container-group-name"
              style={{ backgroundColor: color }}
            >
              <span
                className="notes-container-group-name"
                style={{ backgroundColor: color, color: "#fff" }}
              >
                {selectedGroup?.name}
              </span>
            </div>
          </div>
          {/* <h2>{selectedGroup.name}</h2> */}
          <div className="notes-list">
            {notes.map((note, index) => (
              <div key={index} className="note-card">
                <p>{note.content}</p>
                <span>
                  {new Date(note.dateCreated).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  •{" "}
                  {new Date(note.dateCreated)
                    .toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })
                    .toUpperCase()}
                </span>
              </div>
            ))}
          </div>
          <div className="note-input-container">
            <div className="input-container">
              <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter your text here........"
              />
            </div>
            <div className="add-note-btn">
              <button onClick={handleAddNote} disabled={!noteContent}>
                <img
                  src={!noteContent ? "Arrow.png" : "ColoredArrow.png"}
                  alt=""
                />
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Please select a group to view or add notes.</p>
      )}
    </div>
  );
};

export default NotesContainer;
