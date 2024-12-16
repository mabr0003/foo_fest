"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favoriteBands")) || [];
    setFavorites(savedFavorites);
  }, []);

  if (favorites.length === 0) {
    return <div>Du har ingen favoritter endnu!</div>;
  }

  return (
    <div className="p-20">
      <h1>Mine Favoritter</h1>
      <ul>
        {favorites.map((favoriteId) => (
          <li key={favoriteId}>
            <a href={`/bands/${favoriteId}`} className="text-blue-500 hover:underline">
              Band {favoriteId}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
