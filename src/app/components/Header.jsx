"use client";
import { useState } from "react";
import LoginModal from "./LoginModal";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For at holde styr på login-status
  const [isModalOpen, setIsModalOpen] = useState(false); // For at åbne/lukke login-modal

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Sæt brugeren som logget ind
    setIsModalOpen(false); // Luk modal'en
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Log ud brugeren
  };

  return (
    <div className="col-start-1 col-end-5 row-start-1 self-end flex justify-between py-5 px-10 bayon">
      <a href="#" className="text-white font-bold text-lg hover:text-gray-300">
        FORSIDE
      </a>
      <a href="/tickets" className="text-white font-bold text-lg hover:text-gray-300">
        BILLETTER
      </a>
      <a href="#" className="text-white font-bold text-lg hover:text-gray-300">
        OM OS
      </a>

      {/* Link til favoritter */}
      <a href="/favorites" className="text-white font-bold text-lg hover:text-gray-300">
        FAVORITTER
      </a>

      {/* Knap til login eller sign-out afhængig af login-status */}
      <div className="flex items-center space-x-4">
        {!isLoggedIn ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)} // Åbn modal ved klik
          >
            Log ind
          </button>
        ) : (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleLogout} // Log ud ved klik
          >
            Sign out
          </button>
        )}
      </div>

      {/* Login modal */}
      {isModalOpen && !isLoggedIn && <LoginModal onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
};

export default Header;
