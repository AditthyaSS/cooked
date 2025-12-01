export default async function handler(req, res) {
  const token = req.query.token;

  const response = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=50",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
