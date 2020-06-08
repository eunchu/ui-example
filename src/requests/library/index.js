import { readLibraryLanguageVersion$ as _readLibraryLanguageVersion$ } from "./read-library-language-version";

export const factory = ({ baseUrl, processResponse$, log }) => {
  const dependencies = {
    baseUrl: `${baseUrl}/lib`,
    processResponse$,
    log,
  };

  const readLibraryLanguageVersion$ = _readLibraryLanguageVersion$(
    dependencies
  );

  return {
    readLibraryLanguageVersion$,
  };
};
