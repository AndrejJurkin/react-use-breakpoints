import { useState, useEffect } from 'react';

const useMedia = query => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    let performingCleanup = false;
    const mediaQueryList = window.matchMedia(query);

    const handleChange = () => {
      if (performingCleanup) {
        return;
      }
      setMatches(!!mediaQueryList.matches);
    };

    mediaQueryList.addListener(handleChange);
    mediaQueryList(mediaQueryList.matches);

    return () => {
      performingCleanup = true;
      mediaQueryList.removeListener(handleChange);
    };
  }, []);

  return matches;
};

export default useMedia;
