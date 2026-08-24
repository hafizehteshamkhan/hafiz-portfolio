const skills = [
  "HTML",
  "CSS",
  "Jawascript",
  "React",
  "Next.js",
  "Remix",
  "Tailwind CSS",
  "Responsive Design",
];

export const Skills = () => {
  return (
    <section id="skills" className="container py-20">
      <p className="eyebrow mb-3">02 — Skills</p>
      <h2 className="section-title mb-10">What I Work With</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="max-w-[186px] text-center w-full card px-4 sm:px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-accent2/50 hover:text-accent2"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
