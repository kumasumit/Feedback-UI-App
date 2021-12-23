import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/">
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} />
          </Route>

          <Route path="/about" component={AboutPage} />
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
