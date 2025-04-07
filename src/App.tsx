import { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import YouTubeVideos from "./components/YoutubeVideos";

const App = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionsRef.current) return;

      // Get the current visible section
      const sections = sectionsRef.current.querySelectorAll("section");
      const currentScrollPos = window.scrollY;

      // Find the currently visible section
      let currentSection: Element | null = null;
      let currentSectionIndex = -1;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + section.clientHeight;

        // If the top of the viewport is within this section
        if (
          currentScrollPos >= sectionTop - 50 &&
          currentScrollPos < sectionBottom
        ) {
          currentSection = section;
          currentSectionIndex = i;
          break;
        }
      }

      if (!currentSection) return;

      // Check if we need to scroll within the current section or move to next/prev section
      const viewportHeight = window.innerHeight;
      const sectionHeight = currentSection.clientHeight;
      const sectionTop =
        currentSection.getBoundingClientRect().top + window.scrollY;
      const scrollPositionInSection = currentScrollPos - sectionTop;

      // If section is taller than viewport and we're not at the bottom/top of the section
      if (sectionHeight > viewportHeight) {
        // Calculate if we're near the top or bottom of the current section
        const isNearTop = scrollPositionInSection < 50;
        const isNearBottom =
          scrollPositionInSection + viewportHeight > sectionHeight - 50;

        // If we're in the middle of the section, allow normal scrolling
        if (!isNearTop && !isNearBottom) {
          return; // Don't prevent default, allow normal scrolling
        }

        // If at the bottom of the section and scrolling down, go to next section
        if (
          isNearBottom &&
          e.deltaY > 0 &&
          currentSectionIndex < sections.length - 1
        ) {
          e.preventDefault();
          const nextSection = sections[currentSectionIndex + 1];
          window.scrollTo({
            top: nextSection.getBoundingClientRect().top + window.scrollY,
            behavior: "smooth",
          });
          return;
        }

        // If at the top of the section and scrolling up, go to previous section
        if (isNearTop && e.deltaY < 0 && currentSectionIndex > 0) {
          e.preventDefault();
          const prevSection = sections[currentSectionIndex - 1];
          window.scrollTo({
            top: prevSection.getBoundingClientRect().top + window.scrollY,
            behavior: "smooth",
          });
          return;
        }

        // Otherwise allow normal scrolling within the section
        return;
      }

      // If section fits in viewport, use normal snap behavior
      e.preventDefault();

      let targetSection: Element | null = null;

      if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        // Scrolling down to next section
        targetSection = sections[currentSectionIndex + 1];
      } else if (e.deltaY < 0 && currentSectionIndex > 0) {
        // Scrolling up to previous section
        targetSection = sections[currentSectionIndex - 1];
      }

      if (targetSection) {
        window.scrollTo({
          top: targetSection.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
      }
    };

    const options = { passive: false };
    window.addEventListener("wheel", handleWheel, options);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="snap-y snap-mandatory">
      <Navbar />

      <div ref={sectionsRef}>
        <div className="snap-start">
          <Home />
        </div>
        <div className="snap-start">
          <About />
        </div>
        <div className="snap-start">
          <Experience />
        </div>
        <div className="snap-start">
          <Projects />
        </div>
        <div className="snap-start">
          <YouTubeVideos />
        </div>
        <div className="snap-start">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
