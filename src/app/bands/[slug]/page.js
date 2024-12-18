"use client";

import { useParams } from "next/navigation";
import { getSingleBand, getSchedule } from "@/lib/api";
import { useEffect, useState } from "react";
import Image from "next/image";
import useLoginStore from "@/app/state/login";
import LoginModal from "@/app/components/LoginModal";

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
  const [isFavorite, setIsFavorite] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isLoggedIn } = useLoginStore();

  useEffect(() => {
    async function fetchData() {
      try {
        const bandData = await getSingleBand(slug);
        const scheduleData = await getSchedule();
        setBand(bandData);
        setSchedule(scheduleData);

        if (typeof window !== "undefined") {
          const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
          const isBandFavorite = favorites.some((fav) => fav.slug === bandData.slug);
          setIsFavorite(isBandFavorite);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [slug]);

  const handleToggleFavorite = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    if (typeof window !== "undefined") {
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      if (isFavorite) {
        favorites = favorites.filter((fav) => fav.slug !== band.slug);
      } else {
        favorites.push(band);
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(!isFavorite);
    }
  };

  const imageSrc = band?.logo?.startsWith("https://") ? band.logo : `https://jade-aspiring-termite.glitch.me/logos/${band?.logo}`;

  const playingDays = [];
  for (const stage in schedule) {
    const stageSchedule = schedule[stage];
    for (const day in stageSchedule) {
      const daySchedule = stageSchedule[day];
      if (Array.isArray(daySchedule)) {
        for (const entry of daySchedule) {
          if (entry.act === band.name) {
            const dayLabel = days[day];
            playingDays.push(`${dayLabel} på ${stage} fra ${entry.start} til ${entry.end}`);
          }
        }
      }
    }
  }

  return (
    <div>
      <div className="grid grid-cols-2 p-20">
        <div>
          <h1>{band?.name}</h1>
          <div>
            <ul>
              {playingDays.map((day, index) => (
                <li key={index}>{day}</li>
              ))}
            </ul>
          </div>
          <span>Genre: {band?.genre}</span>
          <p className="mt-6 w-2/3">{band?.bio}</p>

          <button onClick={handleToggleFavorite} className={`mt-4 ${isFavorite ? "bg-red-500" : "bg-blue-500"} text-white px-4 py-2 rounded`}>
            {isFavorite ? "Fjern fra favoritter" : "Føj til favoritter"}
          </button>
        </div>

        <Image src={imageSrc} width={500} height={500} alt={`${band?.name} logo`} />
      </div>

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </div>
  );
}
