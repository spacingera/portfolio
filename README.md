# Portfolio - Akshat Rana

This is a full-stack resume-style portfolio built with React (Vite + Tailwind) frontend and Node/Express backend (MongoDB).

## Quick start (local)

### Frontend
```
cd client
npm install
# set API url in .env (copy .env.example)
npm run dev
```

### Backend
```
cd server
npm install
# create .env with MONGO_URI if needed
node server.js
```

API endpoints:
- POST /api/contact  (save contact message)
- GET /api/projects  (list projects)
- POST /api/projects (add project)
