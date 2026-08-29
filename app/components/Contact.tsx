import { useState, type FormEvent } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:ehteshamsheikh598@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="container py-20">
      <p className="eyebrow mb-3">05 — Contact</p>
      <h2 className="section-title mb-6">Let's Work Together</h2>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Left: intro + quick links */}
        <div>
          <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
            Have a project in mind or just want to say hi? Fill out the form
            or reach me directly — my inbox is always open.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:ehteshamsheikh598@gmail.com"
              className="rounded-md bg-accent px-6 py-3 text-center text-sm font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              ehteshamsheikh598@gmail.com
            </a>
            <a
              href="https://github.com/hafizehteshamkhan"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-6 py-3 text-center text-sm font-medium text-text transition-colors hover:border-accent2/50 hover:text-accent2"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ehtesham-khan-755593336/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-6 py-3 text-center text-sm font-medium text-text transition-colors hover:border-accent2/50 hover:text-accent2"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right: contact form */}
        <form onSubmit={handleSubmit} className="card space-y-5 p-5 sm:p-6 md:p-8">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-md border border-border bg-surface2 px-4 py-3 text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-accent2/60"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-md border border-border bg-surface2 px-4 py-3 text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-accent2/60"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-md border border-border bg-surface2 px-4 py-3 text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-accent2/60"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-accent px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-6 text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Hafiz Ehtesham Khan.</span>
      </div>
    </footer>
  );
}
