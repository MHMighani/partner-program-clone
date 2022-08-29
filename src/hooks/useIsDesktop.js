import { useEffect, useState } from "react";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return isDesktop;
}

export default useIsDesktop;
