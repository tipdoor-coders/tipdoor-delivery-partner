import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#5f18eb66] to-[#5e17eb] relative overflow-hidden">
      {/* Art Deco geometric background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#5f18eb66] opacity-30 rounded-br-[120px]" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#5e17eb] opacity-40 rounded-tl-[80px]" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-[#5e17eb] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 border-8 border-[#5f18eb66]" />
      </div>

      <main className="relative z-10 flex flex-col items-center gap-8 p-8">
        <Image
          src="/Tipdoor.png"
          alt="Tipdoor Logo"
          width={150}
          height={150}
          className="mb-6 rounded-full shadow-lg"
          priority
        />
        <div className="text-center bg-white/90 rounded-2xl shadow-xl px-8 py-6">
          <span className="inline-block px-6 py-2 rounded-xl" style={{ background: 'rgba(95,24,235,1)' }}>
            <h1 className="text-5xl font-extrabold tracking-widest text-white drop-shadow-lg mb-4 font-serif uppercase" style={{ letterSpacing: '0.15em', color: 'rgba(255,255,255,1)' }}>Tipdoor Delivery Partner</h1>
          </span>
          <p className="text-lg text-[#5e17eb] font-medium mb-6 max-w-xl mx-auto">
            Welcome to your delivery dashboard. Navigate your assigned orders, and update statuses.
          </p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <a href="/login" className="bg-[#5e17eb] hover:bg-[#5f18eb66] text-white font-bold py-3 px-8 rounded-[2em] shadow-lg text-xl tracking-widest transition-all font-serif uppercase">Login</a>
          <a href="/deliveries" className="bg-[#5e17eb] hover:bg-[#5f18eb66] text-white font-bold py-3 px-8 rounded-[2em] shadow-lg text-xl tracking-widest transition-all font-serif uppercase">View Deliveries</a>
        </div>
      </main>
      <footer className="relative z-10 mt-16 text-center">
        {/* Footer is now handled by the Footer component for consistency */}
      </footer>
    </div>
  );
}
