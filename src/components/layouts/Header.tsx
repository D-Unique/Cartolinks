export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <div className="space-x-4">
        <button>🏠</button>
        <button>🔍</button>
        <button>✂️</button>
        <button>🎥</button>
      </div>
      <div className="space-x-4">
        <button>⚙️</button>
        <button>💬</button>
      </div>
    </header>
  );
}
