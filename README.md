# 🎬 CinemaVibe

CinemaVibe is a React-based movie browsing application that allows users to explore movies across different genres like Action, Adventure, Comedy, Horror, and more. It integrates with a movie API to fetch real-time data and provides a smooth UI with pagination and categorized browsing.

---

## 🚀 Features

- 🎥 Browse movies by categories (Action, Adventure, Comedy, etc.)
- 🔎 Dynamic movie fetching via API
- 📄 Pagination support
- 🧩 Modular component architecture
- 📱 Responsive UI
- 🔐 Login page UI (extendable for authentication)

---

## 🏗️ Project Architecture

```

src/
│
├── CinemaVibe/
│   ├── Components/
│   │   ├── Aboutus.jsx
│   │   ├── Contactus.jsx
│   │   ├── LoginModal.jsx
│   │   ├── MovieCardList.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pricing.jsx
│   │
│   ├── Explore/
│   │   ├── ActionMovies.jsx
│   │   ├── AdventureMovies.jsx
│   │   ├── AnimationMovies.jsx
│   │   ├── ComedyMovies.jsx
│   │   ├── DramaMovies.jsx
│   │   ├── FamilyMovies.jsx
│   │   ├── FantasyMovies.jsx
│   │   ├── HorrorMovies.jsx
│   │   ├── RomanceMovies.jsx
│   │   ├── SciFiMovies.jsx
│   │
│   ├── Home/
│   │   ├── MovieHomepage.jsx
│   │   ├── MovieList.jsx
│   │   ├── Sidebar.jsx
│
├── assets/
├── App.jsx
├── main.jsx

````

---

## 🧠 Core Concepts Used

- React Hooks (`useState`, `useEffect`)
- API Integration (fetch / async calls)
- Component Reusability
- Conditional Rendering
- Pagination Logic
- Modular Folder Structure

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/cinemavibe.git
cd cinemavibe
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

---

## 🔌 API Integration

This project uses a movie API (e.g., TMDB).

Example request:

```js
fetch(`https://api.themoviedb.org/3/discover/movie?...`)
```

---

## 📌 How It Works

* Each category (Action, Comedy, etc.) is implemented as a separate component.
* When a page loads:

  * `useEffect` triggers an API call
  * Data is stored in state
  * Movies are rendered dynamically using `.map()`
* Pagination updates the page state and triggers a re-fetch.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

Karthikn-VR

```

