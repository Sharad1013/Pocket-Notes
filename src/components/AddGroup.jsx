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

const AddGroup = ({ onClose }) => {
  const [groupName, setGroupName] = useState("");
  const { addGroup, color, chooseColor } = useGroup();

  const NewGroupRef = useRef(null);

  const handleCreateGroup = () => {
    if (groupName && color) {
      addGroup({ name: groupName, color });
      setGroupName("");
      chooseColor("");
      onClose();
    }
  };

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
          <div className="add-group-name">
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
            <div>Choose colour</div>
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
