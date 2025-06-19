# 📚 Spine Tracker

Spine Tracker is a full-stack application designed for book lovers to track their reading, explore book data, and get intelligent suggestions using AI features.

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React** (via [Vite](https://vitejs.dev/)) 
- 💅 **[Skeleton CSS](http://getskeleton.com/)

### Backend
- 🐍 
- 🌐 **Flask-CORS** — for cross-origin support

---

## 📁 Project Structure
spine-tracker/
├── backend/                         # FastAPI backend
│   ├── main.py                      # FastAPI app entry point
│   ├── models.py                    # Pydantic models (e.g., User, Book)
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── auth.py                  # Login/signup endpoints
│   │   ├── books.py                 # Book routes
│   │   └── next_shelf.py           # Routes for Next Book Shelf
│   ├── database.py                 # DB connection (e.g., SQLite/PostgreSQL)
│   ├── utils.py                    # Utility functions (e.g., password hashing)
│   └── requirements.txt            # Backend dependencies
│
├── frontend/                        # React + Vite frontend
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── api/                    # API helper files
│       │   └── api.js              # Base URL and API functions
│       ├── components/
│       │   ├── LoginScreen.jsx
│       │   ├── SignupScreen.jsx
│       │   ├── BookList.jsx
│       │   ├── AddBookForm.jsx
│       │   ├── NextShelf.jsx       # NEW: Component for "Next Book Shelf"
│       │   └── Header.jsx
│       └── styles/
│           └── skeleton.css        # Imported Skeleton CSS
│
├── README.md                       # Project overview
└── .gitignore

