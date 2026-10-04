import Navbar from "../components/Navbar";
import ScrollFX from "../components/ScrollFX";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Path from "../components/Path";
import Toolkit from "../components/Toolkit";
import GithubActivity from "../components/GithubActivity";
import Recognition from "../components/Recognition";
import HowIShowUp from "../components/HowIShowUp";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div
      style={{
        background: "transparent",
        color: "var(--fg)",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <ScrollFX />
      <Navbar />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Work />
        <Path />
        <Toolkit />
        <GithubActivity />
        <Recognition />
        <HowIShowUp />
        <Contact />
      </div>
    </div>
  );
}
