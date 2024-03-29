import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mini from "./component/Mini";
import HotelList from "./component/HotelLish";

function App() {
  const hotelData = [
    {
      name: "MountainLonch",
      photo: "/public/v6.jpg",
      description: "A luxurious hotel with breathtaking views.",
      rating: 4.5,
      location: "sadpara, SkD",
    },
    {
      name: "OYO Hotel ",
      photo: "/public/v7.jpg",
      description: "A luxurious hotel with breathtaking views.",
      rating: 4.5,
      location: "katpana, Skd",
    },
    {
      name: "Example Hotel 1",
      photo: "/public/v5.jpg",
      description: "A luxurious hotel with breathtaking views.",
      rating: 4.5,
      location: "New York, USA",
    },
    {
      name: "OYO Hotel ",
      photo: "/public/v3.jpg",
      description: "A luxurious hotel with breathtaking views.",
      rating: 4.5,
      location: "katpana, Skd",
    },
    {
      name: "Example Hotel 1",
      photo: "/public/v2.jpg",
      description: "A luxurious hotel with breathtaking views.",
      rating: 4.5,
      location: "New York, USA",
    },
    {
      name: "MountainLonch",
      photo: "/public/v6.jpg",
      description: "A luxurious hotel with breathtaking views.",
      rating: 4.5,
      location: "sadpara, SkD",
    },
    {
      name: "OYO Hotel ",
      photo: "/public/v7.jpg",
      description: "A luxurious hotel with breathtaking views.",
      rating: 4.5,
      location: "katpana, Skd",
    },
    {
      name: "Example Hotel 1",
      photo: "/public/v5.jpg",
      description: "A luxurious hotel with breathtaking views.",
      rating: 4.5,
      location: "New York, USA",
    },
    {
      name: "OYO Hotel ",
      photo: "/public/v3.jpg",
      description: "A luxurious hotel with breathtaking views.",
      rating: 4.5,
      location: "katpana, Skd",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mini />} />
        <Route path="/Hotel" element={<HotelList data={hotelData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
