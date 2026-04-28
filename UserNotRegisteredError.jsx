export default function UserNotRegisteredError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-white px-4">
      <div className="max-w-md w-full p-8 bg-card rounded-2xl shadow-lg border border-border text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-500/10 text-orange-400">
          ⚠️
        </div>

        <h1 className="text-3xl font-bold mb-4">גישה מוגבלת</h1>

        <p className="text-white/60 mb-8">
          אין לך הרשאה להיכנס לעמוד הזה.
        </p>

        <a
          href="/"
          className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition"
        >
          חזרה לעמוד הבית
        </a>
      </div>
    </div>
  );
}