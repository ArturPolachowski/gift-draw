## Secret Santa Gift Draw 🎁

A clean, Apple HIG inspired gift exchange generator with 18+ languages, dark mode, optional budget & message, and easy export to text, email, or PNG.

Built as a lightweight, static web app - perfect for families, friends, classrooms, and small teams.

## ✨ Highlights
- Minimal, Apple-like UI
- 18+ languages
- Auto language detection on first visit
- Dark mode
- Safe name validation
- prevents empty entries
- highlights duplicates
- Fair Secret Santa pairing
- no one gets themselves
- Optional extras
- event title
- message
- budget
- Export
- copy text
- email
- PNG share/download
- Fully responsive
- No backend, no tracking

## 🚀 Live Demo

https://arturpolachowski.github.io/gift-draw-generator/

## 🎄 Why this app?

Most Secret Santa tools feel overcomplicated or ad-heavy.
This one focuses on speed, clarity, and a premium, distraction-free experience.

## 🧠 How it works

The app generates a valid draw (a derangement) so that:
- each person gives a gift to exactly one other person
- no one is assigned to themselves
- duplicates are prevented before drawing

## 🌍 Language detection

On first visit, the app tries to match your browser language using:
- navigator.languages
- language fallback logic

Rules:
	1.	If you previously chose a language, it is always used.
	2.	Otherwise, the app finds the best supported match.
	3.	If there is no supported match, it falls back to English.

🌙 Dark mode and PNG export
- The active theme is respected across the UI.
- PNG export matches the current theme (light/dark).
- Arrow alignment is kept visually centered in exported images.

## 🔒 Privacy

This app:
- does not collect analytics
- does not send data anywhere
- stores only lightweight settings locally via localStorage

## 🗺️ Roadmap
- Print-friendly view
- Optional “no couples” rules
- More locale variants (e.g., en-US/en-GB)

## ⭐ Credits

Created by Artur Polachowski.

📄 License

MIT.
