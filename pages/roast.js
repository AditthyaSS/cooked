import { useEffect, useState } from "react";

export default function Roast() {
  const [recentTracks, setRecentTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [roast, setRoast] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("spotify_access_token");

    if (!token) return;

    fetch(`/api/spotify/recent?token=${token}`)
      .then(res => res.json())
      .then(data => {
        console.log("RECENT TRACKS:", data);

        const tracks = data.items || [];
        setRecentTracks(tracks);

        const artistNames = [...new Set(
          tracks.map((t) => t.track.artists[0].name)
        )];

        setArtists(artistNames);
      });
  }, []);

  async function generateRoast() {
  console.log("Sending artists:", artists);

  const response = await fetch("/api/roast", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ artists }),
  });

  const data = await response.json();
  setRoast(data.roast);
}


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 text-center">
      
      <h1 className="text-3xl font-bold mb-4">Your Recently Played Songs 🎵🔥</h1>

      <ul className="mb-6">
        {recentTracks.map((item, index) => (
          <li key={index}>
            {index + 1}. {item.track.name} — {item.track.artists[0].name}
          </li>
        ))}
      </ul>

      <button
        onClick={generateRoast}
        className="px-6 py-3 bg-red-500 rounded-full hover:scale-105 transition-all mb-6"
      >
        Roast Me Based on Recent Songs 🔥
      </button>

      {roast && (
        <div className="text-xl mt-6 max-w-xl leading-relaxed">
          {roast}
        </div>
      )}
    </div>
  );
}
