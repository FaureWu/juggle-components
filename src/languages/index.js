import enUS from './en_US.json';
import zhCN from './zh_CN.json';

const languages = {
  enUS,
  zhCN,
};

export const pkgNames = Object.keys(languages);

export const getLanguage = (locale) => {
  const language = languages[locale];
  if (language !== undefined) {
    return languages[locale];
  }

  throw new Error(`Unknown language package: ${locale}, please check it`);
};

export default 'enUS';
