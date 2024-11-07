// AddGroup.js
import React, { useState, useEffect, useRef } from "react";
import "./styles/AddGroup.css";
import { useGroup } from "../context/store";

const colors = [
  "#B38BFA",
  "#FF79F2",
  "#43E6FC",
  "#F19576",
  "#0047FF",
  "#6691FF",
];

const arr = [" ONE", "TWO", "THREE", "FOUR"];
const AddGroup = ({ onClose }) => {
  const [groupName, setGroupName] = useState("");
  // const [color, setColor] = useState("");
  const { addGroup, color, chooseColor } = useGroup(); // Access from context
  const { groups } = useGroup();

  const NewGroupRef = useRef(null);

  console.log(groups);

  // const handleCreateGroup = () => {
  //   // Implement group creation logic here
  //   alert("Group created:", groupName, color);
  //   console.log(arr);

  //   if (groupName && color) {
  //     addGroup({
  //       name: groupName,
  //       color: color,
  //     });
  //     setGroupName("");
  //     setColor("");
  //     onClose(); // Close the prompt after creating the group
  //   }
  // };

  const handleCreateGroup = () => {
    if (groupName && color) {
      // addGroup({ name: groupName, color: color });
      // setGroupName(""); // Clear input after adding group
      // chooseColor(""); // Clear color selection
      // if (onClose) onClose(); // Close the modal if a close function is provided
      if (groupName && color) {
        addGroup({ name: groupName, color });
        setGroupName("");
        chooseColor("");
        onClose();
      }
    }
  };

  // Close the prompt when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (NewGroupRef.current && !NewGroupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, handleCreateGroup]);

  // Helper function to generate a valid CSS class name from hex color
  const getColorClass = (hexColor) => {
    return `color-${hexColor.replace("#", "")}`;
  };

  return (
    <div className="prompt-overlay">
      <div
        className="prompt"
        ref={NewGroupRef}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Create New Group</h2>
        <div className="color-container">
          <div className="group-name">
            <div>Group Name</div>
            <label>
              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Enter group name"
              />
            </label>
          </div>
          <div className="choose-color">
            <div>Choose color</div>
            <label>
              <div className="color-options">
                {colors?.map((clr) => (
                  <span
                    key={clr}
                    value={color}
                    className={`color-circle ${getColorClass(clr)}`}
                    style={{ backgroundColor: clr }}
                    onClick={() => chooseColor(clr)}
                  />
                ))}
              </div>
            </label>
          </div>
        </div>
        <button
          className="create-button"
          onClick={handleCreateGroup}
          disabled={!groupName && !color}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default AddGroup;
