# react-use-breakpoints
### A small collection of react hooks that will help you with your responsive designs.
### Code sample
https://codesandbox.io/s/xjjvnr3yjp?fontsize=14

#### Basic usage
Unless you pass in your own breakpoints, the hook will be using pre-defined (defaultBreakpoints) breakpoints.
```
import { useBreakpoints } from "react-use-breakpoints";

const { breakpoint, windowSize } = useBreakpoints();
```

#### Default breakpoints
```
export const defaultBreakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};
```

#### Custom breakpoints
It's also possible to define custom breakpoints.
```
import { useBreakpoints } from "react-use-breakpoints";

const customBreakpoints = {
  mobile: 0,
  tablet: 600,
  desktop: 1200
};

const { breakpoint, windowSize } = useBreakpoints(customBreakpoints);
````
You can use `BreakpointContext` to provide your custom breakpoints.
```
import React, { useContext } from "react";
import {
  Breakpoints,
  BreakpointContext,
  useBreakpoints
} from "react-use-breakpoints";

const customBreakpoints = {
  mobile: 0,
  tablet: 600,
  desktop: 1200
};

function App() {
  return (
    <Breakpoints breakpoints={customBreakpoints}>
      <div className="App">
        <CustomBreakpoints />
      </div>
    </Breakpoints>
  );
}

function CustomBreakpoints() {
  const breakpoints = useContext(BreakpointContext);
  const { breakpoint } = useBreakpoints(breakpoints);
  ...
}
```

#### Use WindowSize hook
This hook provides inner and outer window widths as the window is being resized.
```
import { useWindowSize } from "react-use-breakpoints";

const { innerWidth, outerWidth } = useWindowSize();
```
#### Use Media hook
This hook matches a media query based on the screen size.
```
import { useMedia } from "react-use-breakpoints";
...
const matches = useMedia('(min-width: 500px)');
```
