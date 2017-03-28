# LocaleProvider Component

> Juggle Components default language is english,
> if you want to change the language,
> the following information is what you need

## Juggle Components provide a `LocaleProvider` component to change the language

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

## List of supported languages

* enUS
* zhCN

## List of supported props

| props      | default value      | description                        |
| ---------- | ------------------ | ---------------------------------- |
| locale     | enUS               | enUS, zhCN                         |