import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // simple validation
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      setStatus("loading");

      // fake API call
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="px-6 py-20 border-t">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Have a project in mind?
        </h2>

        {status === "success" && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 text-sm rounded">
            Thanks! Your message has been sent successfully.
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 text-sm rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              className="w-full border px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full border px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              className="w-full border px-3 py-2 min-h-[120px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {error && status !== "error" && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-2 bg-black text-white disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};
