import React, { createContext, useContext, useState, useEffect } from "react";

const GroupContext = createContext();

export const useGroup = () => useContext(GroupContext);

export const GroupProvider = ({ children }) => {
  const [groups, setGroups] = useState(() => {
    const savedGroups = localStorage.getItem("groups");
    return savedGroups ? JSON.parse(savedGroups) : [];
  });

  const [color, setColor] = useState("");

  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    if (groups.length > 0) {
      localStorage.setItem("groups", JSON.stringify(groups));
    }
  }, [groups]);

  useEffect(() => {
    localStorage.getItem("groups", JSON.stringify(groups));
  }, [groups]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "groups") {
        const updatedGroups = JSON.parse(event.newValue);
        setGroups(updatedGroups || []);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const addGroup = (group) => {
    setGroups((prevGroups) => [...prevGroups, { ...group, notes: [] }]);
  };

  const addNoteToGroup = (groupName, noteContent) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.name === groupName
          ? {
              ...group,
              notes: [
                ...group.notes,
                {
                  content: noteContent,
                  dateCreated: new Date(),
                  lastUpdated: new Date(),
                },
              ],
            }
          : group
      )
    );
  };

  const chooseColor = (selectedColor) => {
    setColor(selectedColor);
  };

  const getNotesForGroup = (groupName) => {
    const group = groups.find((group) => group.name === groupName);
    return group ? group.notes : [];
  };

  return (
    <GroupContext.Provider
      value={{
        groups,
        addGroup,
        addNoteToGroup,
        getNotesForGroup,
        selectedGroup,
        setSelectedGroup,
        chooseColor,
        color,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};
