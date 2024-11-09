import React, { useEffect } from "react";
import "./styles/Home.css";
import NotesApp from "./NotesApp";
import NotesContainer from "./NotesContainer";
import { useGroup } from "../context/store";

const Home = () => {
  const { selectedGroup } = useGroup();
  return (
    <div className="main-container">
      {/* Sidebar and NotesApp */}
      <NotesApp />

      {/* Conditional Rendering */}
      {selectedGroup ? (
        <NotesContainer />
      ) : (
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
