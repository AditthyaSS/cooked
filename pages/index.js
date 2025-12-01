import { getSpotifyLoginURL } from "../src/utils/spotify";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white gap-6">
      <h1 className="text-4xl font-extrabold tracking-wide">Get Cooked 🔥</h1>
      <LoginButton />
    </div>
  );
}

function LoginButton() {
  return (
    <a
      href={getSpotifyLoginURL()}
      className="
        flex items-center gap-3
        bg-[#1DB954]
        text-black
        px-8 py-4
        rounded-full
        text-lg font-bold tracking-wide
        shadow-[0_4px_12px_rgba(0,0,0,0.4)]
        transition-all duration-200
        hover:shadow-[0_0_18px_4px_#1DB954]
        hover:scale-105
        active:scale-95
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "24px", height: "24px" }}
        fill="currentColor"
        viewBox="0 0 496 512"
      >
        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 
        248-248S385 8 248 8zm101.7 364.9c-4.2 6.9-13.2 
        9-20.1 4.8-55.2-34.2-124.6-41.8-206.4-22.6-7.9 
        1.8-15.9-3.1-17.7-11s3.1-15.9 11-17.7c89.6-20.7 
        165.7-12.2 227.3 25.9 6.8 4.2 8.9 13.3 4.9 
        20.6zm28.8-63.5c-5.2 8.5-16.3 11.2-24.8 
        5.9-63.1-39-158.7-50.4-233.1-27.3-9.4 
        2.8-19.3-2.5-22.1-11.9-2.8-9.4 2.5-19.3 
        11.9-22.1 83.8-25.2 189.6-12.5 261.1 
        33.1 8.4 5.3 11 16.5 6 24.8zm2.2-65.8c-75.4-45.2-200-49.3-272.8-26.8-11.2 
        3.4-23.2-2.9-26.6-14.2-3.4-11.2 
        2.9-23.2 14.2-26.6 82.3-25 221.3-20.2 
        309.6 31.2 10.1 6.1 13.4 19.3 7.3 
        29.4-6.1 10.1-19.3 13.4-29.4 7.3z"/>
      </svg>

      Login with Spotify
    </a>
  );
}
