export default async function handler(req, res) {
  const token = req.query.token;

  const response = await fetch(
    "https://api.spotify.com/v1/me/top/artists?limit=10&time_range=long_term",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const data = await response.json();
  return res.status(200).json(data);
}
