import useWindowSize from './useWindowSize';
import { defaultBreakpoints } from './Breakpoints';

const useBreakpoints = (breakpoints = defaultBreakpoints) => {
  const windowSize = useWindowSize();

  // Returns a sorted array of [key, value] pairs
  const sortedBreakpoints = Object.keys(breakpoints)
    .map(k => [k, breakpoints[k]])
    .sort((a, b) => b[1] - a[1]);

  const getCurrentBreakpoint = () => {
    // eslint-disable-next-line consistent-return
    for (let i = 0; i < sortedBreakpoints.length; i++) {
      const b = sortedBreakpoints[i];
      if (windowSize.innerWidth >= b[1]) {
        return b[0];
      }
    }

    // ScreenWidth is below lowest breakpoint,
    // so it will still be set to equal lowest breakpoint instead of null
    return 'undefined';
  };

  return {
    windowSize,
    breakpoint: getCurrentBreakpoint(),
    sortedBreakpoints,
  };
};

export default useBreakpoints;
