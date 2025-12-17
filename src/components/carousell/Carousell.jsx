import { useEffect, useRef } from "react";
import "./carousell.css";
import Card from "../card/Card.jsx";

export default function Carousel() {
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    const slideOnce = () => {
      track.style.transition = "transform 0.4s ease";
      track.style.transform = "translateX(-50%)"; // move ONE card

      const onTransitionEnd = () => {
        track.style.transition = "none";
        track.style.transform = "translateX(0)";

        // move first slide to end (hidden)
        track.appendChild(track.firstElementChild);

        track.removeEventListener("transitionend", onTransitionEnd);
      };

      track.addEventListener("transitionend", onTransitionEnd);
    };

    intervalRef.current = setInterval(slideOnce, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef}>
        <div className="carousel-item">
          <Card size="small" />
        </div>
        <div className="carousel-item">
          <Card size="small" />
        </div>
        <div className="carousel-item">
          <Card size="small" />
        </div>
      </div>
    </div>
  );
}
