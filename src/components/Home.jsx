// src/components/Home.jsx
import React from "react";
import "./styles/Home.css"; // Import the CSS file
import NotesApp from "./NotesApp";
import Sidebar from "./Sidebar";
import NotesContainer from "./NotesContainer";
import { useGroup } from "../context/store";

// const Home = () => {
//   const { selectedGroup } = useGroup(); // Access selectedGroup to check if a group is selected
//   return (
//     <div className="main-container">
//       <NotesApp />

//       {/* Main Content */}
//       {/* Conditional Rendering */}
//       {selectedGroup ? (
//         // Render NotesContainer if a group is selected
//         <NotesContainer />
//       ) : (
//         <div className="content">
//           <div className="content-image">
//             <img src="BannerPage.png" alt="Banner" />
//           </div>
//           <div className="info">
//             <h2>Pocket Notes</h2>
//             <p>
//               Send and receive messages without keeping your phone online.{" "}
//               <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile
//               phone.
//             </p>
//           </div>
//           <p className="encryption">
//             <img src="Lock.png" alt="lock" /> end-to-end encrypted
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

const Home = () => {
  const { selectedGroup } = useGroup(); // Access selectedGroup to check if a group is selected

  return (
    <div className="main-container">
      {/* Sidebar and NotesApp */}
      <NotesApp />

      {/* Conditional Rendering */}
      {selectedGroup ? (
        // Render NotesContainer if a group is selected
        <NotesContainer />
      ) : (
        // Render Home screen content if no group is selected
        <div className="content">
          <div className="content-image">
            <img src="BannerPage.png" alt="Banner" />
          </div>
          <div className="info">
            <h2>Pocket Notes</h2>
            <p>
              Send and receive messages without keeping your phone online.{" "}
              <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile
              phone.
            </p>
          </div>
          <p className="encryption">
            <img src="Lock.png" alt="lock" /> end-to-end encrypted
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
