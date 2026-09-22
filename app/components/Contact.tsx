import { useEffect, useState, type FormEvent } from "react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, useFetcher } from "@remix-run/react";
import { action } from "~/routes/api.contact";

export const Contact = () => {
  const fetcher = useFetcher<typeof action>();
  const [showSuccess, setShowSuccess] = useState(false);
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data?.success) {
      setValue({
        name: "",
        email: "",
        message: "",
      });
      setShowSuccess(true);

      const timer = setTimeout(() => setShowSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [fetcher.state , fetcher.data]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   setValue({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });
  //   console.log(value);
  // };

  return (
    <section id="contact" className="container py-20">
      <p className="eyebrow mb-3">05 — Contact</p>
      <h2 className="section-title mb-6">Let's Work Together</h2>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Left: intro + quick links */}
        <div>
          <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
            Have a project in mind or just want to say hi? Fill out the form or
            reach me directly — my inbox is always open.
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
        <fetcher.Form
          // onSubmit={handleSubmit}
          className="card space-y-5 p-5 sm:p-6 md:p-8"
          method="post"
          action="/api/contact"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#bebbbb]"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={value.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-md border border-border bg-surface2 px-4 py-3 text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-accent2/60"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#bebbbb]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={value.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-md border border-border bg-surface2 px-4 py-3 text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-accent2/60"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#bebbbb]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={value.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-md border border-border bg-surface2 px-4 py-3 text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-accent2/60"
            />
          </div>

          <button
            type="submit"
            disabled={fetcher.state !== "idle"}
            className="w-full rounded-md bg-accent px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed"
          >
            {fetcher.state !== "idle" ? "Submitting..." : "Send Message"}
          </button>
          {showSuccess && (
            <p className="text-sm font-medium text-green-400">
              ✅ Message sent successfully!
            </p>
          )}
        </fetcher.Form>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-6 text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Hafiz Ehtesham Khan.</span>
      </div>
    </footer>
  );
};
