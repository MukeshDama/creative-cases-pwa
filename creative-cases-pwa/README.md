# Creative Cases – PWA Case Showcase

A **data-driven, high-performance case showcase Progressive Web App (PWA)** built with **React 19**, **TypeScript**, and **Tailwind CSS**.  
Designed with **clarity, maintainability, and real-world frontend architecture** in mind.

---

## 🔗 Live Preview
_(Add your deployed URL here – Netlify / Vercel)_



---

## Project Goals

- Showcase creative case studies in a modern UI
- Filter and group cases using **URL-driven state**
- Support **Grid ↔ List** view toggle
- Consume data from a **fake REST API (json-server)**
- Achieve **95–100 Lighthouse scores**
- Be **installable & offline-ready (PWA)**
- Keep the codebase **simple, readable, and easy to hand over**

---

## Tech Stack

### Frontend
- **React 19**
- **TypeScript**
- **Tailwind CSS** (Flexbox + Grid)
- **React Router v7**

### State Management
- **Redux Toolkit**
- Simple reducers (no `createAsyncThunk`)
- Typed hooks (`useAppDispatch`, `useAppSelector`)

### Forms & Validation
- **Formik**
- **Yup**

### Backend (Mock)
- **json-server**
- REST-style endpoints:
  - `/cases`
  - `/filters`
  - `/clients`

### Build & Performance
- **Vite**
- **vite-plugin-pwa**
- Lazy loading (`React.lazy`)
- Native image lazy loading
- WebP images

---


## Getting Started (Local Development)

## Install dependencies
```bash
npm install

## Start mock backend
npm run server

## Start frontend
npm run dev
## Preview
http://localhost:5173/cases


## Production Build
npm run build
npm run preview

## Preview 
http://localhost:4173/cases

