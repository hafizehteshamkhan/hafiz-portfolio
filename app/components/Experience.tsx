export const Experience = () => {
  return (
    <section id="experience" className="container py-20">
      <p className="eyebrow mb-3">03 — Experience</p>
      <h2 className="section-title mb-10">Where I've Worked</h2>

      <div className="card relative overflow-hidden p-6 md:p-8">
        <div className="absolute inset-y-0 left-0 w-1 bg-accent" />
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h3 className="font-display text-xl font-semibold text-text">
            Front-End Developer
          </h3>
          <span className="font-mono text-xs uppercase tracking-wide text-accent2">
            May 26, 2025 — Present
          </span>
        </div>
        <p className="mt-1 text-sm text-muted">
          World Business Software Solutions · Karachi, Pakistan
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
          Developing and maintaining modern, responsive, and user-friendly
          web applications using Remix and Tailwind CSS. Responsible for
          transforming UI/UX designs into high-quality interfaces, building
          reusable components, integrating APIs, and ensuring optimal
          application performance across different devices and browsers.
          Collaborating closely with designers and back-end developers to
          deliver scalable business solutions while following best practices
          for clean, maintainable, and efficient code.
        </p>
      </div>
    </section>
  );
}
