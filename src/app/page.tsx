"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [fortnitePlayers, setFortnitePlayers] = useState<number | null>(null);
  const [robloxPlayers, setRobloxPlayers] = useState<number | null>(null);

  useEffect(() => {
    // Mock API calls to fetch live concurrent players
    const fetchFortnitePlayers = async () => {
      // Replace with actual API call
      const response = await new Promise<{ players: number }>((resolve) =>
        setTimeout(() => resolve({ players: 3500000 }), 1000)
      );
      setFortnitePlayers(response.players);
    };

    const fetchRobloxPlayers = async () => {
      // Replace with actual API call
      const response = await new Promise<{ players: number }>((resolve) =>
        setTimeout(() => resolve({ players: 4500000 }), 1000)
      );
      setRobloxPlayers(response.players);
    };

    fetchFortnitePlayers();
    fetchRobloxPlayers();
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