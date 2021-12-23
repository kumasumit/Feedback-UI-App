import React from "react";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about"></div>
      <h1>About this project</h1>
      <p>This is a React App to leave feedback</p>
      <p>Version 1.0.0</p>
      <p>
        <a href="/"> Back To Home</a>
      </p>
    </Card>
  );
}

export default AboutPage;
