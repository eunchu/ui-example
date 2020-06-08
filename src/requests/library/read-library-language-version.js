import { of, forkJoin } from "rxjs";
import { switchMap, tap, map } from "rxjs/operators";
import { fromFetch } from "rxjs/fetch";

const LOG_PREFIX = "[requests/library/read-library-language-version.js]";

export const readLibraryLanguageVersion$ = ({
  baseUrl,
  log,
  processResponse$,
}) => (language) => {
  const url$ = of(`${baseUrl}/lang/version/${language}`);
  const headers$ = of({
    "Content-Type": "application/json",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJicmlxdWUiLCJpZCI6ImV1bmp1Iiwicm9sZV9jZCI6IlJfTVNUIiwidHlwZSI6ImluIiwiY3JlX2R0IjoxNTkxNTcxNTA1ODI1fQ.aBNHReCwzigPOMuK-FPR_hSjB0vH2a-SSkCDfdHrhzA",
  });

  return forkJoin({
    url: url$,
    headers: headers$,
  }).pipe(
    tap(({ url, headers }) =>
      log(`${LOG_PREFIX}[readLibraryLanguageVersion$]`, url, null, headers)
    ),
    map(
      ({ url, headers }) =>
        new Request(url, {
          method: "GET",
          headers,
        })
    ),
    switchMap((request) => fromFetch(request)),
    switchMap(processResponse$)
  );
};
