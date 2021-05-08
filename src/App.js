import React, { useRef, useState, useEffect } from "react";
import lottie from "lottie-web";
import "./App.css";
import RatingWidget from "./RatingWidget";

const App = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("./images/done.json"),
    });
  }, []);

  useEffect(() => {
    if (ratingValue) {
      const element = document.querySelector(".text-container");
      element.style.visibility = "visible";
      element.classList.remove("text-container");
      // -> triggering reflow /* The actual magic */
      void element.offsetWidth;
      element.classList.add("text-container");
      lottie.stop();
      lottie.play();
    }
  }, [ratingValue]);

  return (
    <div className="flex">
      <div className="container">
        <h1>Rating Widget</h1>
        <RatingWidget setRatingValue={setRatingValue} />
        <div className="text-container">
          <div className="done-icon" ref={container}></div>
          <p>Thanks! You rated this {ratingValue} stars.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
