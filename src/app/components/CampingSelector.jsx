"use client";
import { useEffect, useState } from "react";
import useTicketStore from "../state/store";
import { getAvailableSpots, reserveSpot } from "@/lib/api";

const CampingSelector = () => {
  const { vipTickets, regularTickets, tentPrices, increaseTent, decreaseTent, totalTentPrice, selectedSpot, selectSpot, twoPersonTentCount, threePersonTentCount } = useTicketStore();

  const totalTickets = vipTickets + regularTickets;
  const totalTentCapacity = twoPersonTentCount * 2 + threePersonTentCount * 3;

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
      {loading ? (
        <p>Loading camping spots...</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {spots.map((spot) => (
            <button key={spot.area} className={`px-4 py-2 rounded flex flex-col ${selectedSpot?.area === spot.area ? "bg-green-500" : "bg-gray-200"}`} onClick={() => selectSpot(spot)}>
              <span>{spot.area}</span>
              <span>
                {spot.available} ud af {spot.spots} pladser tilbage
              </span>
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
        <h3>
          Total Tent Capacity: {totalTentCapacity} / {totalTickets} tickets
        </h3>
        <h3>Total Tent Cost: {totalTentPrice},-</h3>
      </div>
    </div>
  );
};

export default CampingSelector;
