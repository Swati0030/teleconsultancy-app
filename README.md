# teleconsultancy-app
AI-powered teleconsultancy app with real-time speech-to-text and conversation insights

## Tech Stack

- React 18 + TypeScript + Vite
- Tailwind CSS
- Zustand (auth state)
- React Router
- Axios API client
- Framer Motion, Lucide icons

## Getting Started

1. Install dependencies
```
npm install
```

2. Create env file (optional)
```
copy .env.example .env
```

3. Run the app
```
npm run dev
```

App will start at http://localhost:3000

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview build

## Environment Variables
- `VITE_API_URL` — Backend API base URL (defaults to `http://localhost:5000/api`)

## Project Structure
```
src/
  components/           # Reusable UI
  pages/                # Route pages
  services/             # API and domain services
  store/                # Zustand stores
  types/                # Shared types
  main.tsx              # App bootstrap
  App.tsx               # Routing
```

## Next Up
- WebRTC video calling (feature/video-calling)
- Real-time speech-to-text
- AI insights summarization