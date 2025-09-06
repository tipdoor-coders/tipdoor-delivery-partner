export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5f18eb66] to-[#5e17eb]">
      <form className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border-2 border-[#5e17eb]">
        <h1 className="text-3xl font-extrabold text-[#5e17eb] mb-6 text-center">Delivery Partner Login</h1>
        <input type="text" placeholder="Username" className="mb-4 w-full px-3 py-2 border-2 border-[#5e17eb] rounded focus:outline-none focus:border-[#5f18eb66] placeholder:text-[#5e17eb99] text-black" />
        <input type="password" placeholder="Password" className="mb-6 w-full px-3 py-2 border-2 border-[#5e17eb] rounded focus:outline-none focus:border-[#5f18eb66] placeholder:text-[#5e17eb99] text-black" />
        <button type="submit" className="w-full bg-[#5e17eb] text-white py-2 rounded-full hover:bg-[#5f18eb66] transition font-semibold">Log In</button>
        <div className="mt-4 text-center text-[#5e17eb]">
          Don't have an account already? <a href="/signup" className="underline font-bold">Sign Up</a>
        </div>
      </form>
    </div>
  );
}
