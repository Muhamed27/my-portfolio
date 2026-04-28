import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-slate-50">
      <h1 className="text-5xl font-bold text-slate-900 mb-4">404</h1>
      <p className="text-xl text-slate-700 mb-6">העמוד לא נמצא</p>

      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-700 transition"
      >
        חזרה לעמוד הבית
      </Link>
    </div>
  );
}