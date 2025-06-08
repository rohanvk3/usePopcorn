import { useState } from "react";

export default function Box({ children, className = "" }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`box ${className}`}>
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}
