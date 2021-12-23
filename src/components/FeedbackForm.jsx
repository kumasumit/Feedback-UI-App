import React from "react";
import { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const handleTextChange = (evt) => {
    setText(evt.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us ? </h2>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            name=""
            id=""
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit">Send me</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
