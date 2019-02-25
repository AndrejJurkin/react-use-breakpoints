import { useState, useEffect } from 'react';

const useMedia = query => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    let performingCleanup = false;

    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const handleChange = () => {
      if (performingCleanup) {
        return;
      }
      setMatches(!!mediaQueryList.matches);
    };

    mediaQueryList.addListener(handleChange);

    return () => {
      performingCleanup = true;
      mediaQueryList.removeListener(handleChange);
    };
  }, [query]);

  return matches;
};

export default useMedia;
