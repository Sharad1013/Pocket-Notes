// src/components/Home.jsx
import React from "react";
import "./styles/Home.css"; // Import the CSS file
import NotesApp from "./NotesApp";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="main-container">
      {/* Sidebar */}
      {/* <div className="sidebar">
        <h1>Pocket Notes</h1>
        <button className="add-button">+</button>
      </div> */}
      {/* <Sidebar /> */}
      <NotesApp />

      {/* Main Content */}
      <div className="content">
        <div className="content-image">
          <img src="BannerPage.png" alt="Banner" />
        </div>
        <div className="info">
          <h2>Pocket Notes</h2>
          <p>
            Send and receive messages without keeping your phone online. <br />{" "}
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
          </p>
        </div>
        <p className="encryption">
          <img src="Lock.png" alt="lock" /> end-to-end encrypted
        </p>
      </div>
    </div>
  );
};

export default Home;
