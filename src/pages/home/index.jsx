import React from "react";
import InfoCard from "./components/infoCard";
import Todo from "./components/todo";

const HomePage = () => {
  return (
    <div className="home">
      <InfoCard />
      <Todo />
    </div>
  );
};

export default HomePage;
