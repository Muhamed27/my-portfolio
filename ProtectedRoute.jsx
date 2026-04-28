import { Outlet } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";

export default function ProtectedRoute({ fallback = null, unauthenticatedElement = null }) {
  const { isAuthenticated, isLoadingAuth } = useAuth();

  // Loading
  if (isLoadingAuth) {
    return (
      fallback || (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
        </div>
      )
    );
  }

  // Not authenticated
  if (!isAuthenticated) {
    return unauthenticatedElement || null;
  }

  // Authenticated
  return <Outlet />;
}