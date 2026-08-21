import type { MetaFunction } from "@remix-run/node";

import Projects from "~/components/Projects";
import { Hero } from "~/components/Hero";
import { Nav } from "~/components/Nav";
import { About } from "~/components/About";
import { Skills } from "~/components/Skills";
import { Experience } from "~/components/Experience";
import { Contact, Footer } from "~/components/Contact";

export const meta: MetaFunction = () => [
  { title: "Hafiz Ehtesham Khan — Front-End Developer" },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
