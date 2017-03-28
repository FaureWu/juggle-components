# LocaleProvider Component

> Juggle Components default language is english,
> if you want to change the language,
> the following information is what you need

### Juggle Components provide a `LocaleProvider` component to change the language

```JSX
import { LocaleProvider } from 'juggle-components';

class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale="zhCN">
        <Hello></Hello>
      </LocaleProvider>
    );
  }
}
```

### List of supported languages

* enUS
* zhCN

### List of supported props

| props      | default value      | description                        |
| ---------- | ------------------ | ---------------------------------- |
| locale     | enUS               | enUS, zhCN                         |

### How to add a langugage support

You should go to the path `src/languages/` and add the language package like:

> src/languages/en_US.json

```JSON
{
  "hello": {
    "text": "hello world"
  }
}
```
then register it to `src/languages/index.js` like:

> src/languages/index.js

```JSX
import enUS from './en_US.json';

const languages = {
  enUS,
};

```
