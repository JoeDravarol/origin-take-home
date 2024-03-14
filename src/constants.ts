export const COLORS = {
  white: '#FFF',
  offwhite: '#F4F8FA',
  gray: {
    200: '#4D6475',
    300: '#708797',
    400: '#8A9CA9',
    700: '#E9EEF2',
  },
  primary: '#FFF', // white
  secondary: '#1E2A32', // Cyan blue
  accent: {
    light: '#0079FF',
    primary: '#1B31A8',
  },
};

export const BREAKPOINTS = {
  tabletMin: 600,
  laptopMin: 1440,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
};

export const FAMILES = {
  sansSerifHeader:
    '"Rubik", Helvetica, "Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", sans-serif',
  sansSerifText:
    '"Work Sans", Helvetica, "Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", sans-serif',
};

export const WEIGHTS = {
  normal: 400,
  medium: 500,
  bold: 600,
};
