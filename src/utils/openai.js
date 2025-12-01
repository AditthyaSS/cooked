console.log("OPENAI KEY LOADED:", process.env.OPENAI_API_KEY ? "YES" : "NO");

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function roastUser(artists) {
  try {
    const prompt = `
You will receive a list of artists:
${artists.join(", ")}

Detect the user's music taste language using FULL LIST:

LANGUAGE RULES:
1. If MOST artists are Indian/Hindi singers  
   (Arijit, KK, Jubin, Atif Aslam, Shreya, Badshah, Sonu Nigam, Pritam, Amit Trivedi, Vishal-Shekhar, Darshan Raval, Sunidhi, etc)  
   → Give a roast in PURE HINDI (English letters).

2. If MOST artists are Western/English singers  
   → Give a roast in SIMPLE ENGLISH.

3. If the artist list is mixed Hindi + English  
   → Give a roast in HINGLISH (mix of Hindi + English).

ROAST STYLE:
- ONE sentence only.
- Very short.
- Sarcastic and funny.
- Simple words.
- 18+ allowed sexual content.
- Funny toxic Gen-Z sarcasm.
- No emojis.
- Give ONLY the roast sentence.
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: prompt }
      ],
      temperature: 1.35,
      max_tokens: 40,
    });

    return completion.choices[0].message.content.trim();

  } catch (err) {
    console.error("OPENAI ERROR:", err);
    return "OPENAI ERROR: " + err.message;
  }
}
