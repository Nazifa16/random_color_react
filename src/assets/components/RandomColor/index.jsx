import React, { useState } from "react";

function RandomColor() {
  const initialColors = [
    "rgb(100,220,245)",
    "rgb(140,200,200)",
    "rgb(190,100,220)",
    "rgb(200,225,245)",
    "rgb(120,130,200)",
    "rgb(160,180,150)",
    "rgb(250,208,240)",
    "rgb(230,200,225)",
    "rgb(220,250,240)",
    "rgb(100,220,245)",
    "rgb(140,200,200)",
    "rgb(190,100,220)",
    "rgb(200,225,245)",
    "rgb(120,130,200)",
    "rgb(160,180,150)",
    "rgb(250,208,240)",
    "rgb(230,200,225)",
    "rgb(220,250,240)",
    "rgb(100,220,245)",
    "rgb(140,200,200)",

    "rgb(250,208,240)",
    "rgb(230,200,225)",
    "rgb(220,250,240)",
    "rgb(100,220,245)",
    "rgb(140,200,200)",
    "rgb(190,100,220)",
    "rgb(200,225,245)",
    "rgb(120,130,200)",
  ];

  const [colors, setColors] = useState(initialColors);

  const colorGenerator = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };

  const handleColorChange = (index) => {
    const newColors = [...colors];
    newColors[index] = colorGenerator();
    setColors(newColors);
  };

  return (
    <div
      style={{
        display: "flex",
        msFlexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "90%",
          backgroundColor: "rgb(240,240,240)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: 200,
              height: 200,
              borderRadius: 5,
              margin: 5,
            }}
            role="button"
            onClick={() => handleColorChange(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default RandomColor;
