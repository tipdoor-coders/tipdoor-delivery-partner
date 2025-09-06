
'use client';
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DeliveryDetailsPage({ params }) {
  // Placeholder delivery data
  const [status, setStatus] = useState("Assigned");
  const delivery = {
    id: params.id,
    customer: params.id,
    address: "123 Ujala Nagar",
    status,
  };

  function handleStatusChange(newStatus) {
    setStatus(newStatus);
    // Placeholder for API call
    // fetch(`/api/deliveries/${delivery.id}/status`, { method: "POST", body: JSON.stringify({ status: newStatus }) })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#5f18eb66] to-[#5e17eb]">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 border-2 border-[#5e17eb]">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-[#5f18eb66] rounded-full">
              <svg className="w-7 h-7 text-[#5e17eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h3m4 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2" /></svg>
            </span>
            <h1 className="text-3xl font-extrabold text-[#5e17eb]">Delivery Details</h1>
          </div>
          <div className="mb-6 border-b pb-4 border-[#5f18eb66]">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-lg text-[#5e17eb]">Order #{delivery.id}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ml-2 ${status === "Assigned" ? "bg-[#5f18eb66] text-[#5e17eb]" : status === "Picked Up" ? "bg-[#5e17eb] text-white" : "bg-green-600 text-white"}`}>{status}</span>
            </div>
            <div className="mb-1 text-[#5e17eb] flex items-center gap-2">
              <svg className="w-5 h-5 text-[#5f18eb66]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.657 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Customer: <span className="font-medium">{delivery.customer}</span></span>
            </div>
            <div className="text-[#5e18eb99] flex items-center gap-2">
              <svg className="w-5 h-5 text-[#5f18eb66]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11V7a4 4 0 10-8 0v4" /></svg>
              <span>Address: <span className="font-medium">{delivery.address}</span></span>
            </div>
          </div>
          <div className="flex gap-3 justify-end mb-4">
            <a href="/deliveries" className="bg-[#5e17eb] hover:bg-[#5f18eb66] text-white font-bold px-4 py-2 rounded-lg shadow transition">Back to Deliveries</a>
            {status === "Assigned" && (
              <button onClick={() => handleStatusChange("Picked Up")} className="flex items-center gap-2 bg-[#5e17eb] text-white px-5 py-2 rounded-lg shadow hover:bg-[#5f18eb66] transition font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Mark as Picked Up
              </button>
            )}
            {status === "Picked Up" && (
              <button onClick={() => handleStatusChange("Delivered")} className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Mark as Delivered
              </button>
            )}
          </div>
              <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                {/* Map placeholder using Google Maps embed */}
                <iframe
                  title="Delivery Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9556513153187!3d-37.81732797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f8e7e7%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633072800000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
