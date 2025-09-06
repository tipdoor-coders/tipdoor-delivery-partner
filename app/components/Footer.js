export default function Footer() {
  return (
    <footer className="w-full bg-[#5f18eb66] text-white py-4 px-6 text-center font-serif text-sm tracking-widest mt-16 border-t border-[#5e17eb] shadow">
      &copy; {new Date().getFullYear()} <span className="font-bold">Tipdoor Delivery Partner App</span>
    </footer>
  );
}
