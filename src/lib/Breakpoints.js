import * as React from 'react';

const BreakpointContext = React.createContext();

export const defaultBreakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const Breakpoints = ({ breakpoints = defaultBreakpoints, children }) => (
  <BreakpointContext.Provider breakpoints={breakpoints}>
    {children}
  </BreakpointContext.Provider>
);

export default Breakpoints;
