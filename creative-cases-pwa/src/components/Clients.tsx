import { useAppSelector } from "../app/store/hooks";

const Clients = () => {
  const clients = useAppSelector((s) => s.clients.items);

  if (clients.length === 0) return null;

  return (
    <section id="clients" className="px-6 py-16 border-t">
      <div className="max-w-6xl mx-auto pb-12 bg-black">
        <h2 className="text-xl font-semibold mb-8 text-center text-white pt-5">
          Trusted by teams worldwide
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="h-10 object-contain grayscale opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;