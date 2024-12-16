"use client";
import { useEffect, useState } from "react";
import useTicketStore from "../state/store";
import { getAvailableSpots } from "@/lib/api";
import GoGreen from "./GoGreen";

const CampingSelector = ({ handleNextClick, handleBackClick }) => {
  const { tentPrices, increaseTent, decreaseTent, selectedSpot, selectSpot, twoPersonTentCount, threePersonTentCount } = useTicketStore();

  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpots() {
      setLoading(true);
      const availableSpots = await getAvailableSpots();
      setSpots(availableSpots);
      setLoading(false);
    }
    fetchSpots();
  }, []);

  return (
    <div>
      <h1 className="text-center">Vælg Campingområde</h1>
      <GoGreen />
      {loading ? (
        <p>Loading camping spots...</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {spots.map((spot) => (
            <button key={spot.area} className={`px-4 py-2 rounded flex flex-col ${selectedSpot?.area === spot.area ? "bg-green-500" : "bg-gray-200"}`} onClick={() => selectSpot(spot)}>
              <span>{spot.area}</span>
              <span>{spot.available === 0 ? "UDSOLGT" : `${spot.available} ud af ${spot.spots} pladser tilbage`}</span>
            </button>
          ))}
        </div>
      )}
      <h3>Choose Tent Options</h3>
      <div className="flex flex-col gap-4">
        {/* 2-Person Tent */}
        <div className="flex gap-10 bg-accent max-w-56 px-5 py-3 rounded-lg justify-between">
          <h3>2-Person Tent ({tentPrices["2-person"]},-)</h3>
          <div className="flex gap-2">
            <button onClick={() => decreaseTent("2-person")}>-</button>
            <span>{twoPersonTentCount}</span>
            <button onClick={() => increaseTent("2-person")}>+</button>
          </div>
        </div>
        {/* 3-Person Tent */}
        <div className="flex gap-10 bg-accent max-w-56 px-5 py-3 rounded-lg justify-between">
          <h3>3-Person Tent ({tentPrices["3-person"]},-)</h3>
          <div className="flex gap-2">
            <button onClick={() => decreaseTent("3-person")}>-</button>
            <span>{threePersonTentCount}</span>
            <button onClick={() => increaseTent("3-person")}>+</button>
          </div>
        </div>
      </div>

      <div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleNextClick}>
          Next
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={handleBackClick}>
          Back
        </button>
      </div>
    </div>
  );
};

export default CampingSelector;
