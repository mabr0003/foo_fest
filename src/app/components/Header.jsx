import { useState } from "react";
import useLoginStore from "../state/login"; // Zustand store
import LoginModal from "./LoginModal"; // Din LoginModal komponent

const Header = () => {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn); // Hent login-status
  const setLogIn = useLoginStore((state) => state.setLogIn); // Log ind
  const setLogOut = useLoginStore((state) => state.setLogOut); // Log ud

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal status

  const handleLoginSuccess = () => {
    setLogIn(); // Opdater login-statusen
    setIsModalOpen(false); // Luk modal'en
  };

  const handleLogout = () => {
    setLogOut(); // Log ud
  };

  const handleFavoriteClick = (e) => {
    // Forhindre standardnavigation, hvis ikke logget ind
    if (!isLoggedIn) {
      e.preventDefault(); // Stopper linket fra at navigere
      setIsModalOpen(true); // Åbn login modal
    }
    // Hvis brugeren er logget ind, kan linket navigere til favoritter
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-4 h-28">
        <img src="/img2.png" alt="logo" className="col-start-1 row-start-1 w-36 h-36 z-20" />

        <div className="flex space-x-4">
          {/* Link til favoritter */}
          <a href="/favourites" className="text-black font-bold text-lg hover:text-gray-300" onClick={handleFavoriteClick}>
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
          {isModalOpen && !isLoggedIn && <LoginModal onClose={() => setIsModalOpen(false)} onLoginSuccess={handleLoginSuccess} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
