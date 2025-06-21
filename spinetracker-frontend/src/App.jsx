import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage'; 
import SignupPage from "./pages/SignupPage";
import bookShelfPage from "./pages/BookshelfPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/bookshelf" element={<bookShelfPage />} />
      </Routes>
    </Router>
  );
}
