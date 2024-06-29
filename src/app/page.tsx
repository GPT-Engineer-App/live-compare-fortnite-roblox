"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [fortnitePlayers, setFortnitePlayers] = useState<number | null>(null);
  const [robloxPlayers, setRobloxPlayers] = useState<number | null>(null);

  // Placeholder data fetching
  useEffect(() => {
    // Simulate fetching data with a timeout
    setTimeout(() => {
      setFortnitePlayers(3500000); // Placeholder for Fortnite players
      setRobloxPlayers(4500000); // Placeholder for Roblox players
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Live Concurrent Players Comparison</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Fortnite</h2>
          <p className="text-xl">
            {fortnitePlayers !== null ? fortnitePlayers.toLocaleString() : "Loading..."}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Roblox</h2>
          <p className="text-xl">
            {robloxPlayers !== null ? robloxPlayers.toLocaleString() : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
}