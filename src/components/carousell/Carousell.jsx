import { useEffect, useRef, useState } from "react"; // Added useState
import "./carousell.css";
import Card from "../card/Card.jsx";
import { Bell, ChartNoAxesColumn, Clock } from "lucide-react";

export default function Carousel() {
    const trackRef = useRef(null);
    const requestRef = useRef();
    const positionRef = useRef(0);
    const isHovered = useRef(false); // Using a ref for hover to avoid re-renders

    const items = [
        { id: 1, icon: <Bell />, type: "email" },
        { id: 2, icon: <ChartNoAxesColumn />, isCheckBox: true, type: "notify_amount" },
        { id: 3, icon: <Clock />, isCheckBox: true, type: "notify_time" },
    ];

    const displayItems = [...items, ...items];

    useEffect(() => {
        const animate = () => {
            const track = trackRef.current;
            if (!track) return;

            // Only move the position if NOT hovered
            if (!isHovered.current) {
                positionRef.current -= 0.6;
                const halfWidth = track.scrollWidth / 2;
                
                if (Math.abs(positionRef.current) >= halfWidth) {
                    positionRef.current = 0;
                }
                
                track.style.transform = `translateX(${positionRef.current}px)`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return (
        <div 
            className="carousel"
            onMouseEnter={() => { isHovered.current = true; }} // Set hover to true
            onMouseLeave={() => { isHovered.current = false; }} // Set hover to false
        >
            <div className="carousel-track" ref={trackRef}>
                {displayItems.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <Card size="small" icon={item.icon} isCheckBox={item.isCheckBox} type={item.type} />
                    </div>
                ))}
            </div>
        </div>
    );
}