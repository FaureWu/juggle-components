import defaultLocale, { getLanguage } from '../../languages';

export const getComponentLocale = (
  componentName, language, exist,
) => {
  const defaultLanguage = getLanguage(defaultLocale);

  if (exist && language && language[componentName]) {
    return language[componentName];
  } else if (!exist && defaultLanguage && defaultLanguage[componentName]) {
    return defaultLanguage[componentName];
  }

  throw new Error(`Unknow component language: ${componentName}`);
};

export default {
  getComponentLocale,
};
