export default function Navbar() {
  return (
    <nav className="w-full bg-[#5e17eb] text-white py-4 px-6 flex items-center justify-between shadow-lg font-serif uppercase tracking-widest z-20">
      <a href="/" className="flex items-center">
  <img src="/Tipdoor.png" alt="Tipdoor Logo" className="h-16 w-auto drop-shadow-lg" />
      </a>
      <div className="flex gap-6 text-lg">
        <a href="/deliveries" className="hover:text-[#e0d5f666] transition">Deliveries</a>
        <a href="/login" className="hover:text-[#e0d5f666] transition">Login</a>
      </div>
    </nav>
  );
}
