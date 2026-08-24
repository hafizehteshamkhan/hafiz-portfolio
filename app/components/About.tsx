export const About = () => {
  return (
    <section id="about" className="container py-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow mb-3">01 — About</p>
          <h2 className="section-title mb-6">About Me</h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            I am a passionate Front-End Developer who loves coding and solving
            problems. I enjoy exploring new technologies and learning modern
            libraries and frameworks to improve my skills. My key strength is
            creating highly responsive websites that look great on all devices.
          </p>

          <div className="mt-8 grid max-w-md grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="card px-4 py-4 text-center">
              <p className="font-display text-2xl font-semibold text-accent2">
                5+
              </p>
              <p className="mt-1 text-xs text-muted">Live Projects</p>
            </div>
            <div className="card px-4 py-4 text-center">
              <p className="font-display text-2xl font-semibold text-accent2">
                7
              </p>
              <p className="mt-1 text-xs text-muted">Core Skills</p>
            </div>
            <div className="card px-4 py-4 text-center col-span-2 sm:col-span-1">
              <p className="font-display text-2xl font-semibold text-accent2">
                100%
              </p>
              <p className="mt-1 text-xs text-muted">Responsive</p>
            </div>
          </div>
        </div>

        {/* Illustration: responsive design across devices */}
        <div className="card flex items-center justify-center p-8 shadow-glow">
          <svg
            viewBox="0 0 420 340"
            className="h-auto w-full max-w-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="330" cy="60" r="80" fill="#22D3EE" opacity="0.10" />
            <circle cx="70" cy="280" r="70" fill="#6C5CE7" opacity="0.12" />

            {/* laptop base */}
            <rect
              x="70"
              y="230"
              width="230"
              height="14"
              rx="4"
              fill="#1F2A3A"
            />
            <path
              d="M78 244 L292 244 L302 260 L68 260 Z"
              fill="#161F2E"
              stroke="#2A3648"
            />

            {/* laptop screen */}
            <rect
              x="90"
              y="90"
              width="190"
              height="140"
              rx="8"
              fill="#161F2E"
              stroke="#2A3648"
              strokeWidth="2"
            />
            <rect
              x="100"
              y="100"
              width="170"
              height="120"
              rx="3"
              fill="#0B0F14"
            />

            {/* mini webpage inside laptop */}
            <rect
              x="108"
              y="108"
              width="154"
              height="16"
              rx="3"
              fill="#1F2A3A"
            />
            <circle cx="116" cy="116" r="3" fill="#FF5F56" />
            <circle cx="126" cy="116" r="3" fill="#FFBD2E" />
            <circle cx="136" cy="116" r="3" fill="#27C93F" />
            <rect x="108" y="132" width="70" height="8" rx="3" fill="#6C5CE7" />
            <rect
              x="108"
              y="146"
              width="154"
              height="5"
              rx="2"
              fill="#3A4863"
            />
            <rect
              x="108"
              y="156"
              width="120"
              height="5"
              rx="2"
              fill="#3A4863"
            />
            <rect
              x="108"
              y="172"
              width="66"
              height="40"
              rx="4"
              fill="#1F2A3A"
            />
            <rect
              x="182"
              y="172"
              width="66"
              height="40"
              rx="4"
              fill="#1F2A3A"
            />
            <rect
              x="116"
              y="180"
              width="50"
              height="6"
              rx="3"
              fill="#22D3EE"
              opacity="0.8"
            />
            <rect
              x="190"
              y="180"
              width="50"
              height="6"
              rx="3"
              fill="#F5C56B"
              opacity="0.85"
            />

            {/* phone overlapping laptop */}
            <rect
              x="290"
              y="140"
              width="86"
              height="160"
              rx="14"
              fill="#161F2E"
              stroke="#2A3648"
              strokeWidth="2"
            />
            <rect
              x="298"
              y="156"
              width="70"
              height="128"
              rx="4"
              fill="#0B0F14"
            />
            <rect x="322" y="146" width="22" height="4" rx="2" fill="#2A3648" />

            {/* mini webpage inside phone */}
            <rect
              x="304"
              y="164"
              width="58"
              height="10"
              rx="3"
              fill="#6C5CE7"
            />
            <rect x="304" y="180" width="58" height="4" rx="2" fill="#3A4863" />
            <rect x="304" y="188" width="40" height="4" rx="2" fill="#3A4863" />
            <rect
              x="304"
              y="200"
              width="58"
              height="30"
              rx="4"
              fill="#1F2A3A"
            />
            <rect
              x="310"
              y="207"
              width="30"
              height="5"
              rx="2"
              fill="#22D3EE"
              opacity="0.8"
            />
            <rect
              x="304"
              y="238"
              width="58"
              height="30"
              rx="4"
              fill="#1F2A3A"
            />
            <rect
              x="310"
              y="245"
              width="30"
              height="5"
              rx="2"
              fill="#F5C56B"
              opacity="0.85"
            />

            {/* connecting dots to suggest sync */}
            <circle cx="284" cy="120" r="4" fill="#22D3EE" />
            <circle cx="300" cy="100" r="3" fill="#6C5CE7" />
            <circle cx="316" cy="112" r="2.5" fill="#22D3EE" />
          </svg>
        </div>
      </div>
    </section>
  );
};
