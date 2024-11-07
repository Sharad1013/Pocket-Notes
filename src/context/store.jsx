import React, { createContext, useContext, useState, useEffect } from "react";

const GroupContext = createContext();

export const useGroup = () => useContext(GroupContext);

export const GroupProvider = ({ children }) => {
  //   const [groups, setGroups] = useState([]);
  const [groups, setGroups] = useState(() => {
      // Try to load groups from localStorage if available
      const savedGroups = localStorage.getItem("groups");
      return savedGroups ? JSON.parse(savedGroups) : []; // Return saved groups or an empty array
    });
    const [color, setColor] = useState("");
    const [selectedGroup, setSelectedGroup] = useState(null);
    
//   useEffect(() => {
//     const savedGroups = JSON.parse(localStorage.getItem("groups")) || [];
//     setGroups(savedGroups);
//   }, []);

  // Save data to localStorage whenever groups are updated
  useEffect(() => {
    if (groups.length > 0) {
      localStorage.setItem("groups", JSON.stringify(groups)); // Persist the groups
    }
  }, [groups]);

  // get data from localStorage
  useEffect(() => {
    localStorage.getItem("groups", JSON.stringify(groups));
  }, [groups]);

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
    console.log("Selected color:", selectedColor); // Log to confirm color selection
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
