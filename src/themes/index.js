import defaultTheme from './default';
import blue from './blue';

const themes = {
  default: defaultTheme,
  blue,
};

export const themeNames = Object.keys(themes);

export const getTheme = (name) => {
  const theme = themes[name];
  if (theme !== undefined) {
    return theme;
  }

  throw new Error(`Unknown theme: ${name}, please check it`);
};

export default 'default';
