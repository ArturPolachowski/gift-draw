## Gift Draw Generator

A clean, Apple HIG–inspired gift exchange generator with 18+ languages, dark mode, optional budget & message fields, and export to text, email, or PNG.

Built as a lightweight static web app — fast, simple, private.

------------------------

## ✨ Highlights

- Minimal, Apple-like UI  
- 18+ languages  
- Auto-language detection on first visit  
- Dark mode  
- Safe name validation  
  - prevents empty entries  
  - highlights duplicates  
- Fair pairing logic  
  - no one gets themselves  
- Optional extras  
  - event title  
  - message  
  - budget  
- Export  
  - copy text  
  - email  
  - PNG download/share  
- Fully responsive  
- No backend, no tracking  

------------------------

## 🚀 Live Demo

https://arturpolachowski.github.io/gift-draw/

------------------------

## 🧠 How it works

The app generates a valid derangement so that:

- each participant is assigned exactly one recipient  
- no participant is assigned to themselves  
- duplicates are prevented before drawing  

------------------------

## 🌍 Language detection

On first visit, the app attempts to match the user’s browser language using:

- `navigator.languages`  
- fallback rules  

Priority rules:

1. If the user previously selected a language, it is always used.  
2. Otherwise, the closest supported language is chosen.  
3. If no match exists, the app falls back to English.  

Dark mode is fully supported and reflected in PNG exports.

------------------------

## 🔒 Privacy

This app:

- does **not** collect analytics  
- does **not** send data anywhere  
- stores only minimal settings (theme, language, inputs) in `localStorage`  

------------------------

## 🗺️ Roadmap

- Print-friendly layout  
- Optional “no couples” pairing rule  
- Additional locale variants  

------------------------

## 🔤 Translations

Translations for additional languages were assisted using ChatGPT.

If you notice:

- a translation error  
- unnatural wording  
- missing phrasing  

please contact me and I will update it.

------------------------

## 🐛 Bug reports

If you find:

- a visual bug  
- a logic bug in pairing  
- an issue with PNG export  
- anything unexpected  

please report it to me — all fixes are welcome.

------------------------

## ⭐ Credits

Created by **Artur Polachowski**.

------------------------

## 📄 License

MIT.
