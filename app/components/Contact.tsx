export const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow mb-3">05 — Contact</p>
      <h2 className="section-title mb-6">Let's Work Together</h2>
      <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
        Have a project in mind or just want to say hi? My inbox is always
        open.
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
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Hafiz Ehtesham Khan.</span>
        <span className="font-mono">Built with Remix &amp; Tailwind CSS.</span>
      </div>
    </footer>
  );
}
