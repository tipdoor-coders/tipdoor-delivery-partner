export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5f18eb66] to-[#5e17eb]">

            <form className="bg-white bg-opacity-90 rounded-2xl shadow-xl w-full max-w-sm border-2 border-[#5e17eb] p-8">

                <h1 className="text-3xl font-extrabold text-[#5e17eb] mb-6 text-center">Sign Up</h1>

                <input type="text" placeholder="Enter your username" className="mb-4 w-full px-3 py-2 border-2 border-[#5e17eb] rounded focus:outline-none focus:border-[#5f18eb66] placeholder:text-[#5e17eb99] text-black" />
                <input type="email" placeholder="Enter your email address" className="mb-4 w-full px-3 py-2 border-2 border-[#5e17eb] rounded focus:outline-none focus:border-[#5f18eb66] placeholder:text-[#5e17eb99] text-black" />
                <input type="password" placeholder="Create a password" className="mb-6 w-full px-3 py-2 border-2 border-[#5e17eb] rounded focus:outline-none focus:border-[#5f18eb66] placeholder:text-[#5e17eb99] text-black" />
                <input type="password" placeholder="Enter your driving license" className="mb-6 w-full px-3 py-2 border-2 border-[#5e17eb] rounded focus:outline-none focus:border-[#5f18eb66] placeholder:text-[#5e17eb99] text-black" />
                <input type="password" placeholder="Enter your vehicle no." className="mb-6 w-full px-3 py-2 border-2 border-[#5e17eb] rounded focus:outline-none focus:border-[#5f18eb66] placeholder:text-[#5e17eb99] text-black" />
                <input type="password" placeholder="Enter ID proof (AADHAR / Voter ID)" className="mb-6 w-full px-3 py-2 border-2 border-[#5e17eb] rounded focus:outline-none focus:border-[#5f18eb66] placeholder:text-[#5e17eb99] text-black" />

                <button type="submit" className="w-full bg-[#5e17eb] text-white py-2 rounded-full hover:bg-[#5f18eb66] transition font-semibold">Sign Up</button>
                
                <div className="mt-4 text-center text-[#5e17eb]">
                    Already have an account? <a href="/login" className="underline font-bold">Log In</a>
                </div>

            </form>

        </div>
    );
}
