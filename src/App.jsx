import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AppointmentForm from "./pages/Appointments.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import BotpressChat from "./components/BotpressChat.jsx";
import Layout from "./components/Layout.jsx";

const queryClient = new QueryClient();

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();
  return auth ? <>{children}</> : <Navigate to="/" replace />;
};

// Public Route component
const PublicRoute = ({ children }) => {
  const { auth } = useAuth();
  return !auth ? <>{children}</> : <Navigate to="/dashboard" replace />;
};

const AppRoutes = () => {
  const location = useLocation();
  const showBotOn = ["/landing-page"];
  const shouldShowBot = showBotOn.includes(location.pathname);

 return (
    <>
      {shouldShowBot && <BotpressChat />}

      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/form"
          element={
            <ProtectedRoute>
              <Layout>
                <AppointmentForm />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Toaster />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
