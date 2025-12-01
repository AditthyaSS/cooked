import { roastUser } from "../../src/utils/openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { artists } = req.body;

  const roast = await roastUser(artists);

  res.status(200).json({ roast });
}
