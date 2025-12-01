export const getSpotifyLoginURL = () => {
  const scopes = [
  "user-top-read",
  "user-read-recently-played",
  "user-read-playback-position"
];


  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    response_type: "code",
    redirect_uri: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI,
    scope: scopes.join(" "),
    show_dialog: "true"
  });

  return `https://accounts.spotify.com/authorize?${params.toString()}`;
};
