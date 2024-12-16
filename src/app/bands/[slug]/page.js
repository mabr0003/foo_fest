"use client";
import { useParams } from "next/navigation";
import { getSingleBand, getSchedule } from "@/lib/api";
import { useEffect, useState } from "react";
import Image from "next/image";

// Map for day names
const days = {
  mon: "Mandag",
  tue: "Tirsdag",
  wed: "Onsdag",
  thu: "Torsdag",
  fri: "Fredag",
  sat: "Lørdag",
  sun: "Søndag",
};

export default function BandPage() {
  const { slug } = useParams();
  const [band, setBand] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false); // For at holde styr på om bandet er favorit

  useEffect(() => {
    async function fetchData() {
      try {
        const bandData = await getSingleBand(slug);
        const scheduleData = await getSchedule();
        setBand(bandData);
        setSchedule(scheduleData);

        // Tjek om bandet allerede er i favoritter
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const isBandFavorite = favorites.some((fav) => fav.slug === bandData.slug);
        setIsFavorite(isBandFavorite);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [slug]);

  const handleToggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      // Hvis bandet allerede er en favorit, fjern det
      favorites = favorites.filter((fav) => fav.slug !== band.slug);
    } else {
      // Hvis bandet ikke er en favorit, tilføj det
      favorites.push(band);
    }

    // Gem de opdaterede favoritter i localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));

    // Opdater favorite status
    setIsFavorite(!isFavorite);
  };

  if (!band || !schedule) {
    return <div>Loading...</div>;
  }

  const imageSrc = band.logo.startsWith("https://") ? band.logo : `https://jade-aspiring-termite.glitch.me/logos/${band.logo}`;

  // Find the days when the band is scheduled to play
  const playingDays = [];
  for (const stage in schedule) {
    const stageSchedule = schedule[stage]; // E.g., "Midgard"
    for (const day in stageSchedule) {
      const daySchedule = stageSchedule[day]; // Array of schedule entries for that day
      if (Array.isArray(daySchedule)) {
        for (const entry of daySchedule) {
          if (entry.act === band.name) {
            const dayLabel = days[day];
            playingDays.push(`${dayLabel} på ${stage}`);
          }
        }
      }
    }
  }

  return (
    <div className="grid grid-cols-2 p-20">
      <div>
        <h1>{band.name}</h1>
        <div>
          <ul>
            {playingDays.map((day, index) => (
              <li key={index}>{day}</li>
            ))}
          </ul>
        </div>
        <span>Genre: {band.genre}</span>
        <p className="mt-6 w-2/3">{band.bio}</p>

        {/* Knappen til at tilføje til/fjerne fra favoritter */}
        <button onClick={handleToggleFavorite} className={`mt-4 ${isFavorite ? "bg-red-500" : "bg-blue-500"} text-white px-4 py-2 rounded`}>
          {isFavorite ? "Fjern fra favoritter" : "Føj til favoritter"}
        </button>
      </div>

      <Image src={imageSrc} width={500} height={500} alt={`${band.name} logo`} />
    </div>
  );
}
