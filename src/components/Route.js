import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentURL, setCurrentURL] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentURL(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  });

  return currentURL === path ? children : null;
};

export default Route;
