import type { MetaFunction } from "@remix-run/node";
import Nav from "~/components/Nav";
import About from "~/components/About";
import Skills from "~/components/Skills";
import Experience from "~/components/Experience";
import Projects from "~/components/Projects";
import Contact, { Footer } from "~/components/Contact";
import { Hero } from "~/components/Hero";

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
