import Homepage from "./pages/Homepage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BlogEditor from "./components/Createblog";
import Createblog from "./components/Createblog";
import { AuthProvider } from "./context/Authcontext";
import ProtectedRoute from "./components/Protected";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route 
            path="/create" 
            element={
              <ProtectedRoute>
                <Createblog />
              </ProtectedRoute>
            } 
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}