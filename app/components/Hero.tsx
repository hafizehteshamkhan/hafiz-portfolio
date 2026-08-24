import image from "~/assets/images/dev-image.png"

export const  Hero = () => {
  return (
    <section id="top" className="pb-20 pt-16 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow mb-4">Front-End Developer</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-text md:text-6xl">
            Hafiz Ehtesham
            <br />
            Khan
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            I am a passionate Front-End Developer who loves coding and
            solving problems. I enjoy exploring new technologies and
            learning modern libraries and frameworks — building highly
            responsive websites that look great on all devices.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-md border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent2/50 hover:text-accent2"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex gap-5">
            <a
              href="https://github.com/hafizehteshamkhan"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent2"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ehtesham-khan-755593336/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent2"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ehteshamsheikh598@gmail.com"
              className="text-sm text-muted transition-colors hover:text-accent2"
            >
              Email
            </a>
          </div>
        </div>

        {/* Signature element: a minimal code-editor style card */}
        <div className="max-w-75 w-full">
          <img src={image} className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
