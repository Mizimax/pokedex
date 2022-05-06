const ELEMENT_COLORS = {
  Psychic: '#f8a5c2',
  Fighting: '#f0932b',
  Fairy: '#c44569',
  Normal: '#f6e58d',
  Grass: '#badc58',
  Metal: '#95afc0',
  Water: '#3dc1d3',
  Lightning: '#f9ca24',
  Darkness: '#574b90',
  Colorless: '#FFF',
  Fire: '#eb4d4b',
};

const COLORS = {
  primary: {
    300: '#dc7777',
    500: '#ec5656',
  },
  secondary: '#ffffff',
};

const FONTS = {
  header: `'Atma', 'Gaegu',cursive`,
  content: `'Gaegu',cursive`,
};

const SPACES = [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512];

const theme = {
  colors: COLORS,
  elements: ELEMENT_COLORS,
  fonts: FONTS,
  space: SPACES,
};

export default theme;
