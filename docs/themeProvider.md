# ThemeProvider Component

> Juggle Components have a default theme and include some theme to choose,
> if you want to change the theme,
> the following information is what you need

### Juggle Components provide a `ThemeProvider` component to change the theme

```JSX
import { ThemeProvider } from 'juggle-components';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme="blue">
        <Hello></Hello>
      </ThemeProvider>
    );
  }
}
```

### List of supported theme

* default
* blue

### List of supported props

| props      | default value      | description                        |
| ---------- | ------------------ | ---------------------------------- |
| theme      | default            | default, blue                      |

### How to add a theme support

You should go to the path `src/themes/` and add the theme file like:

> src/themes/default.js

```JSX
import colors from './colors.json';

export default {
  hello: {
    color: colors.purple,
  },
};

```
then register it to `src/themes/index.js` like:

> src/themes/index.js

```JSX
import defaultTheme from './default';

const themes = {
  default: defaultTheme,
};

```