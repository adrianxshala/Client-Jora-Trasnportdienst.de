import React from "react";
import Home from "./pages/home";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-gray-100">
      <Home />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.02) 26%, transparent 27%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.02) 26%, transparent 27%, transparent)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}

export default App;
