type CreateDinamicUrlStringParams = {
  [key: string]: string | number;
};

export const createDinamicUrlPath = (
  baseUrl: string,
  options: CreateDinamicUrlStringParams
) => {
  const optionsEntries = Object.entries(options);
  return optionsEntries.reduce((acc, [key, value]) => {
    const regexp = new RegExp(`:${key}`);
    return acc.replace(regexp, value.toString());
  }, baseUrl);
};
