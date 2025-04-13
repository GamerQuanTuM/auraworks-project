"use client";

import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position: "left" | "right";
  children: React.ReactNode;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  position,
  children,
}) => {
  // Prevent body scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key press to close drawer
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 w-[80%] max-w-[300px] bg-white z-50 transition-transform duration-300 md:hidden ${
          position === "left" ? "left-0" : "right-0"
        } ${
          isOpen
            ? "translate-x-0"
            : position === "left"
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-3 ${position === "left" ? "right-3" : "left-3"} p-2 text-gray-600 hover:text-gray-900`}
          aria-label="Close drawer"
        >
          <IoClose size={24} />
        </button>

        {/* Content */}
        <div className="h-full overflow-y-auto pt-12 pb-4">{children}</div>
      </div>
    </>
  );
};

export default MobileDrawer;