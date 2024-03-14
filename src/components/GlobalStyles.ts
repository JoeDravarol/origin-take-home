import { createGlobalStyle } from 'styled-components';
import '@fontsource/rubik/500.css';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/600.css';

import { COLORS, FAMILES, WEIGHTS } from '../constants';

const GlobalStyles = createGlobalStyle`
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}

/* DESIGN TOKENS */
html {
  --color-white: ${COLORS.white};
  --color-offwhite: ${COLORS.offwhite};
  --color-gray-200: ${COLORS.gray[200]};
  --color-gray-300: ${COLORS.gray[300]};
  --color-gray-400: ${COLORS.gray[400]};
  --color-gray-700: ${COLORS.gray[700]};
  --color-primary: ${COLORS.primary};
  --color-secondary: ${COLORS.secondary};
  --color-accent: ${COLORS.accent['primary']};
  --color-accent-light: ${COLORS.accent['light']};

  --font-family-sans-serif-header: ${FAMILES.sansSerifHeader};
  --font-family-sans-serif-text: ${FAMILES.sansSerifText};

  --font-weight-normal: ${WEIGHTS.normal};
  --font-weight-medium: ${WEIGHTS.medium};
  --font-weight-bold: ${WEIGHTS.bold};
}

/* GLOBAL STYLES */
html, body {
  background: var(--color-offwhite);
  font-family: var(--font-family-sans-serif-text);
}
`;

export default GlobalStyles;
