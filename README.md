![Cooked Banner](https://dummyimage.com/1200x300/000/1DB954&text=Cooked+-+Roast+My+Spotify)


**🎧 Cooked — Roast Based on Your Spotify History**
<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/Spotify%20API-1DB954?style=for-the-badge&logo=spotify&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenAI%20API-412991?style=for-the-badge&logo=openai" />
  <img src="https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Made%20By-Aditthya%20Varma-red?style=for-the-badge" />
</p>


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

# Contributing to Cooked

Create a file named:

CONTRIBUTING.md

Paste this

Thank you for your interest in contributing! ❤️  
Cooked is a fun open-source project that roasts people based on their Spotify taste.

## 🛠 How to Contribute

### 1. Fork the Repository
Click the **Fork** button on GitHub and clone your fork:


git clone https://github.com/YOUR_USERNAME/cooked.git

cd cooked


### 2. Create a New Branch
Always create a feature branch:


git checkout -b feature/your-feature-name


### 3. Install Dependencies


npm install


### 4. Add Your Changes
Write clean, readable code.
Follow the project structure.

### 5. Commit Message Style
Use this format:


feat: added new roast model
fix: spotify scope issue
docs: updated README


### 6. Push to Your Fork


git push origin feature/your-feature-name


### 7. Create a Pull Request
Go to the main repo → **Pull Requests** → **New PR**

---

## 🎯 Contribution Rules

- No sensitive keys pushed (Spotify/OpenAI/ngrok)
- Keep roasts funny but safe (no offensive or sexual content)
- Don’t break the UI
- Keep commit history clean

---

## ❤️ Thank You

Your contributions help make Cooked even more fun!

PRs welcome.
Roasts welcome too. 😭🔥

📜 License
MIT

