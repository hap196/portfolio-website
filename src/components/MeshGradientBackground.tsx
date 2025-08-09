import React from "react";

function MeshGradientBackground() {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundColor: "#fef7f5",
          backgroundImage: `
          radial-gradient(circle at 52% 73%, hsla(50, 85%, 86%, 0.75) 0px, transparent 50%),
          radial-gradient(circle at 0% 30%, hsla(330, 65%, 83%, 0.75) 0px, transparent 50%),
          radial-gradient(circle at 41% 26%, hsla(340, 60%, 86%, 0.75) 0px, transparent 50%),
          radial-gradient(circle at 41% 51%, hsla(45, 80%, 83%, 0.75) 0px, transparent 50%),
          radial-gradient(circle at 41% 88%, hsla(200, 75%, 86%, 0.75) 0px, transparent 50%),
          radial-gradient(circle at 76% 73%, hsla(330, 65%, 83%, 0.75) 0px, transparent 50%),
          radial-gradient(circle at 29% 37%, hsla(340, 60%, 86%, 0.75) 0px, transparent 50%)`,
          backgroundSize: "150% 150%",
          filter: "blur(80px)",
          animation: "moveBackground 20s ease-in-out infinite",
        }}
      ></div>
    </div>
  );
}

export default MeshGradientBackground;
