# CheckMate

A real-time multiplayer chess web app. Move validation is handled by chess.js, and live play between players runs over Socket.IO.

## Tech stack

- **Frontend:** React 19, Vite, Tailwind CSS, Framer Motion, Lucide icons
- **Backend:** Node.js, Express, Socket.IO
- **Game logic:** chess.js

## Getting started

Requires Node.js 20 or newer.

```bash
git clone https://github.com/JaiAakash21/CheckMate.git
cd CheckMate
npm install

# terminal 1: start the realtime server
npm run server

# terminal 2: start the frontend
npm run dev
```

The frontend runs on the Vite dev server (http://localhost:5173 by default).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run server` | Start the Express + Socket.IO backend |
| `npm run build` | Create a production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
backend/      Express + Socket.IO server
src/
  components/ UI components
  hooks/      Custom React hooks
  utils/      Helpers
```

## Author

Built by [Jai Aakash S](https://github.com/JaiAakash21).
