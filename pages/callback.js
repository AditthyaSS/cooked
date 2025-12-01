import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const code = router.query.code;

    if (!code) return;

    fetch(`/api/auth/spotify?code=${code}`)
      .then(res => res.json())
      .then(data => {
        console.log("TOKEN DATA", data);

        if (data.access_token) {
          localStorage.setItem("spotify_access_token", data.access_token);
          router.push("/roast");
        } else {
          alert("Failed to authenticate with Spotify.");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Something went wrong.");
      });
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen text-white text-2xl bg-black">
      Redirecting...
    </div>
  );
}
