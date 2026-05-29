
import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[999] w-44 h-44 rounded-full bg-orange-500/20 blur-3xl"
      style={{
        left: position.x - 80,
        top: position.y - 80,
      }}
    ></div>
  );
};

export default CursorGlow;