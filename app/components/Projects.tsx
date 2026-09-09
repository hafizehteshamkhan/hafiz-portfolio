const projects = [
  {
    name: "Compare a Price",
    link: "https://www.compareaprice.co.uk/",
    desc: "A price comparison platform helping users find the best deals across multiple services with a clean and responsive UI.",
  },
  {
    name: "World Business Software Solutions",
    link: "https://www.worldsoftwares.com/",
    desc: "A professional business website showcasing software solutions with a modern layout and user-friendly design.",
  },
  {
    name: "Hong Kong Wholesaler",
    link: "https://www.hongkongwholesalers.com/",
    desc: "An e-commerce-based platform designed for wholesalers with structured product display and responsive experience.",
  },
  {
    name: "UK Airport Taxi Transfers",
    link: "https://www.ukairportstaxitransfer.co.uk/",
    desc: "A booking-based website for airport transfers with smooth navigation and mobile-first design approach.",
  },
  {
    name: "B2B Mobile Wholesalers",
    link: "https://www.b2bmobilewholesalers.com/",
    desc: "A modern B2B wholesale platform for mobile phones and consumer electronics, featuring product categories, wholesale stock, trade services, and a responsive experience for business buyers.",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container py-20">
      <p className="eyebrow mb-3">04 — Projects</p>
      <h2 className="section-title mb-10">Live Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="card group flex flex-col justify-between p-6 transition-colors hover:border-accent2/50"
          >
            <div>
              <h3 className="font-display text-lg font-semibold text-text group-hover:text-accent2">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.desc}
              </p>
            </div>
            <span className="mt-5 font-mono text-xs text-accent2">
              {project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
