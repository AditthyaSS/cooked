🎧 Cooked — Roast Based on Your Spotify History

Cooked is a fun web app that roasts users based on their Spotify listening habits.
Login with Spotify → app fetches your recently played tracks → AI generates a short toxic roast (Hindi/English depending on your taste 😭🔥).

Built with:

Next.js 16
Spotify Web API
OpenAI (or Groq optional)
TailwindCSS

Ngrok (for local OAuth)

🚀 Features

Login with Spotify OAuth
Fetch Recently Played Tracks
Smart Artist Language Detection
If mostly Hindi → Roast in Hindi (English letters)
If fully English → Roast in English
If mixed → Hinglish roast
Gen-Z toxic roast (one sentence 😭🔥)
Dark minimal UI

Works locally with ngrok

📦 Project Setup
1️⃣ Clone the repo
git clone https://github.com/YOUR_USERNAME/cooked.git
cd cooked

2️⃣ Install dependencies
npm install

3️⃣ Create .env.local

Create a file named .env.local
and add your keys:

NEXT_PUBLIC_SPOTIFY_CLIENT_ID=YOUR_SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET=YOUR_SPOTIFY_CLIENT_SECRET
NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=https://your-ngrok-url.ngrok-free.dev/callback

OPENAI_API_KEY=YOUR_OPENAI_KEY   # optional
⚠️ Do NOT commit this file.

🎧 Spotify Developer Setup

Go to: https://developer.spotify.com/dashboard

Create an app

Add Redirect URI:
https://your-ngrok-url.ngrok-free.dev/callback


Copy:
Client ID
Client Secret

Paste them into .env.local
🌐 Ngrok Setup (for local testing)

Open terminal 1:
npm run dev


Open terminal 2:
ngrok http 3000

Copy generated HTTPS URL → paste into .env.local
and also as your Spotify redirect URI.

🤖 AI Roast System
✔ Uses gpt-4o-mini (high quality, cheap)
or
✔ Groq (completely free option)

Language Logic:
Mostly Hindi artists → Hindi roast
Fully English artists → English roast
Mixed → Hinglish roast

🧪 Run the project
npm run dev


Automatically opens at:
http://localhost:3000

🔐 Environment Variables
Variable	Required	Description
NEXT_PUBLIC_SPOTIFY_CLIENT_ID	✅	Spotify OAuth
SPOTIFY_CLIENT_SECRET	✅	Required for token exchange
NEXT_PUBLIC_SPOTIFY_REDIRECT_URI	✅	OAuth redirect
OPENAI_API_KEY	⚠ Optional	For AI roasting
🛑 Security Warning

Do NOT upload .env.local to GitHub.
Do NOT share your Spotify or OpenAI keys.
Do NOT commit ngrok tokens.

🤝Thanks for Contributing

PRs welcome.
Roasts welcome too. 😭🔥

📜 License
MIT
