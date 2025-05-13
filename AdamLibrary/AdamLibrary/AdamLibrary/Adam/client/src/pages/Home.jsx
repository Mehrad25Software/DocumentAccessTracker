import "./css/styles.css";
import 'animate.css';
import React from "react";

const folders = [
  "JFK Folder", "Free Folder", "Free Folder", "Free Folder",
  "Free Folder", "Free Folder", "Fre Folder", "Free Folder",
  "Free Folder", "Free Folder", "Free Folder", "Free Folder",
  "Free Folder", "Free Folder", "Free Folder","Free Folder", "Free Folder","Free Folder"
];

const Home = () => {
  return (
    <>
      <div className="body">
        <h1 className="animate__animated animate__rubberBand home">
          Welcome to The Library
        </h1>

        <img
          src="../images/library.webp"
          alt="Library"
          style={{ width: "100%", maxWidth: "800px", height: "auto" }}
        />

        <br />

        {/* Folder Grid */}
        <div className="container">
          <div className="row justify-content-center">
            {folders.map((folderName, index) => (
              <div
                key={index}
                className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex justify-content-center"
              >
                <div style={{ width: "8rem" }}>
                  <img
                    className="card-img-top"
                    src="../images/folder.png"
                    alt="Folder"
                  />
                  <div className="card-body">
                    <p className="card-text">{folderName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
