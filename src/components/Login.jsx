import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import backgroundImage from "../assets/pediatric-background.jpg"; // Ensure the path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast } from 'bootstrap';
const apiUrl = import.meta.env.VITE_API_URL;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const toastRef = useRef(null);
  const { setAuth } = useAuth();
  const navigate = useNavigate();

const showToast = (message, type = "success") => {
  const toastEl = toastRef.current;
  if (!toastEl) return;

  // Update toast content and class directly
  toastEl.querySelector(".toast-body").textContent = message;
  toastEl.className = `toast align-items-center text-bg-${type} border-0`;

  // Dispose existing instance
  const existingToast = Toast.getInstance(toastEl);
  if (existingToast) existingToast.dispose();

  // Create new Toast instance
  const toast = new Toast(toastEl, { autohide: true, delay: 3000 });
  toast.show();
};



  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${apiUrl}api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setAuth(data);
        showToast(`Login Successful! Welcome, ${username}`, "success");
        navigate("/dashboard");
      } else {
        throw new Error("Login failed");
      }
    } catch (err) {
      showToast("Login Failed. Please check your credentials.", "danger");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Login Card */}
      <div className="card shadow-lg p-4" style={{ minWidth: "350px", backgroundColor: "rgba(255,255,255,0.9)" }}>
        <div className="text-center mb-4">
          <h1 className="text-primary">Pediatric Associates of Frisco</h1>
          <p className="text-muted">Compassionate Care for Your Little Ones</p>
        </div>

        <h4 className="text-center mb-3 text-primary">Welcome Back</h4>
        <p className="text-center text-muted mb-4">Please sign in to access your dashboard</p>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-muted mt-4 mb-0">© 2025 Pediatric Associates of Frisco</p>
      </div>

      {/* Bootstrap Toast */}
      <div
  className="position-fixed top-0 end-0 p-3"
  style={{ zIndex: 1055 }}
>
        <div
          ref={toastRef}
          className={`toast align-items-center text-bg-${toastType} border-0`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">{toastMessage}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
