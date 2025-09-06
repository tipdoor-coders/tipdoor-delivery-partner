export default function DeliveriesPage() {
  // Placeholder deliveries
  const deliveries = [
    { id: 1, customer: "Vikas Dev", address: "123 Petersburgh Russia", status: "Assigned" },
    { id: 2, customer: "Einstein Albert", address: "456 Oak Ave", status: "Picked Up" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#5f18eb66] to-[#5e17eb]">
      <div className="flex-1 p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-white mb-6">Assigned Deliveries</h1>
        <ul className="space-y-4">
          {deliveries.map((delivery) => (
            <li key={delivery.id} className="bg-white p-4 rounded-2xl shadow flex flex-col md:flex-row md:items-center md:justify-between border-2 border-[#5e17eb]">
              <div>
                <div className="font-semibold text-[#5e17eb]">Order #{delivery.id}</div>
                <div className="text-[#5e17eb]">{delivery.customer}</div>
                <div className="text-sm text-[#5f18eb66]">{delivery.address}</div>
              </div>
              <div className="mt-2 md:mt-0 flex gap-2 items-center">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ml-2 ${delivery.status === "Assigned" ? "bg-[#5f18eb66] text-[#5e17eb]" : "bg-[#5e17eb] text-white"}`}>{delivery.status}</span>
                <a href={`/deliveries/${delivery.id}`} className="bg-[#5e17eb] hover:bg-[#5f18eb66] text-white font-bold px-3 py-1 rounded-lg shadow transition text-xs">Details</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
