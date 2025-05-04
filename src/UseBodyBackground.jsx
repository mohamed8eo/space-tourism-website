import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function UseBodyBackground() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Current pathname:", pathname);

    // Define screen size helpers
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches;

    console.log("isMobile:", isMobile, "isTablet:", isTablet);

    // Dynamic background logic
    const backgrounds = {
      "/": isMobile
        ? "url('/assets/home/background-home-mobile.jpg')"
        : isTablet
        ? "url('/assets/home/background-home-tablet.jpg')"
        : "url('/assets/home/background-home-desktop.jpg')",

      "/home": isMobile
        ? "url('/assets/home/background-home-mobile.jpg')"
        : isTablet
        ? "url('/assets/home/background-home-tablet.jpg')"
        : "url('/assets/home/background-home-desktop.jpg')",

      "/destination": isMobile
        ? "url('/assets/destination/background-destination-mobile.jpg')"
        : isTablet
        ? "url('/assets/destination/background-destination-tablet.jpg')"
        : "url('/assets/destination/background-destination-desktop.jpg')",

      "/crew": isMobile
        ? "url('/assets/crew/background-crew-mobile.jpg')"
        : isTablet
        ? "url('/assets/crew/background-crew-tablet.jpg')"
          : "url('/assets/crew/background-crew-desktop.jpg')",
      
      "/technology": isMobile
        ? "url('/assets/technology/background-technology-mobile.jpg')"
        : isTablet
        ? "url('/assets/technology/background-technology-tablet.jpg')"
        : "url('/assets/technology/background-technology-desktop.jpg')",
    };

    const bg = backgrounds[pathname] || "none";
    console.log("Background:", bg);

    // Apply it to <body>
    document.body.style.backgroundImage = bg;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.transition = "background-image 0.3s ease-in-out";

    // Cleanup on unmount
    return () => {
      console.log("Cleanup triggered");
      document.body.style.backgroundImage = "none";
    };
  }, [pathname]);

  return null; // This hook doesn't render anything
}

export default UseBodyBackground;