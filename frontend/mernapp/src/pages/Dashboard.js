import React from "react";
import "./Dashboard.css";

// Import images from assets
import bedroom from "../assets/bedroom.JPG";
import kitchen from "../assets/kitchen.JPG";
import livingroom from "../assets/livingroom.JPG";

const images = [
  { src: bedroom, title: "Bedroom" },
  { src: kitchen, title: "Kitchen" },
  { src: livingroom, title: "Living Room" },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>My Interior Design Dashboard</h1>
      <div className="image-grid">
        {images.map((img, index) => (
          <div key={index} className="image-card">
            <img src={img.src} alt={img.title} />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
