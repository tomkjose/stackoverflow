import React from "react";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import QuestionCard from "../components/QuestionCard/QuestionCard";
import "../styles/home.css";
import RightSidebar from "../components/RightSidebar/RightSidebar";
function Home() {
  return (
    <div className="home">
      <LeftSidebar />
      <QuestionCard />
      <RightSidebar />
    </div>
  );
}

export default Home;
