"use client";

import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie-player";
import menuAnimation from "../assets/animation/menu.json"; // Replace with your JSON file path

export default function Variants() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <div className='inline tablet:hidden'>
            <div style={container}>
                <nav
                    style={{
                        ...nav,
                        clipPath: isOpen
                            ? `circle(${height * 2 + 200}px at 40px 40px)`
                            : "circle(30px at 40px 40px)",
                        transition: isOpen
                            ? "clip-path 0.5s ease-in-out"
                            : "clip-path 0.3s ease-in-out",
                    }}
                    ref={containerRef}
                >
                    <div style={background} />
                    <Navigation />
                    <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                </nav>
            </div>
        </div>
    );
}

const Navigation = () => (
    <ul style={list}>
        {/* {[0, 1, 2, 3, 4].map((i) => (
            <MenuItem i={i} key={i} />
        ))} */}
    </ul>
);

const MenuItem = ({ i }) => {
    const border = `2px solid ${colors[i]}`;
    return (
        <li style={{ ...listItem, border }}>
            <div style={{ ...iconPlaceholder, border }} />
            <div style={{ ...textPlaceholder, border }} />
        </li>
    );
};

// PropTypes validation for MenuItem
MenuItem.propTypes = {
    i: PropTypes.number.isRequired, // Ensure i is a number and required
};
const MenuToggle = ({ toggle, isOpen }) => {
    const [play, setPlay] = useState(false);

    const handleClick = () => {
        toggle(); // Toggle the state
        setPlay(true); // Start the animation manually
    };

    return (
        <button style={toggleContainer} onClick={handleClick}>
            <Lottie
                loop={false}
                animationData={menuAnimation}
                play={play} // Explicitly control playback
                segments={isOpen ? [1, 14] : [14, 28]} // Play specific segments
                onComplete={() => setPlay(false)} // Reset play state after animation completes
                style={{ width: 50, height: 50 }}
            />
        </button>
    );
};

// PropTypes validation for MenuToggle
MenuToggle.propTypes = {
    toggle: PropTypes.func.isRequired, // Ensure toggle is a function and required
    isOpen: PropTypes.bool.isRequired, // Ensure isOpen is a boolean and required
};

/**
 * ==============   Styles   ================
 */

const container = {
    position: "relative",
    // display: "flex",
    
    // alignItems: "center",
    // flex: 1,
    width: '50vw',
    // maxWidth: "100%",
    height: '20vh',
    marginTop:'20vh',
    top:0,
    // right:0,
    backgroundColor: "purple",
    // justifyContent:'center',
    borderRadius: 20,
    // overflow: "hidden",
    alignItems:'center'
};

const nav = {
    width: '100%',
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor:'green',
    marginLeft:'30vw',
};

const background = {
    backgroundColor: "blue",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    margin:0,
    width: '50vw',
    // zIndex:'10',
    display:'flex',
    marginLeft:'40vw',
    justifyContent:'flex-end',
};

const toggleContainer = {
    // outline: "none",
    // border: "none",
    cursor: "pointer",
    position: "absolute",
    top:0,
    // alignItems:'center',
    // width: 50,
    // height: 50,
    borderRadius: "50%",
    background: "red",
    marginLeft:'36vw',
    marginTop:'1.4vh',
    // color:'white'
};

const list = {
    listStyle: "none",
    padding: 25,
    margin: 0,
    position: "absolute",
    top: 80,
    width: 230,
};

const listItem = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 20,
    cursor: "pointer",
};

const iconPlaceholder = {
    width: 40,
    height: 40,
    borderRadius: "50%",
    flex: "40px 0",
    marginRight: 20,
};

const textPlaceholder = {
    borderRadius: 5,
    width: 200,
    height: 20,
    flex: 1,
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

/**
 * ==============   Utils   ================
 */

const useDimensions = (ref) => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight;
        }
    }, [ref]);

    return dimensions.current;
};
