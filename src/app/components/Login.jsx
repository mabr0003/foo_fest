"use client";
import { useState } from "react";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Her kan du tilføje validering eller API-kald til login
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Forkert brugernavn eller kodeord!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md max-w-sm mx-auto mt-10">
      {isLoggedIn ? (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Du er logget ind!</h2>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Log ud
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
          <label className="mb-2">Brugernavn:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="p-2 border rounded mb-4" placeholder="Indtast brugernavn" required />
          <label className="mb-2">Kodeord:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border rounded mb-4" placeholder="Indtast kodeord" required />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Log ind
          </button>
        </form>
      )}
    </div>
  );
}
