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

  useEffect(() => {
    async function fetchData() {
      try {
        const bandData = await getSingleBand(slug);
        const scheduleData = await getSchedule();
        setBand(bandData);
        setSchedule(scheduleData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [slug]);

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
      <p>{band.bio}</p>
      <Image src={imageSrc} width={500} height={500} alt={`${band.name} logo`} />
    </div>
  );
}
