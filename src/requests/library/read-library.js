import { of, forkJoin } from "rxjs";
import { tap, map, switchMap } from "rxjs/operators";
import { fromFetch } from "rxjs/fetch";

const LOG_PREFIX = "[requests/library/read-library.js]";

export const readLibrary$ = ({ baseUrl, log, processResponse$ }) => (
  libraryId
) => {
  // 필요한 data를 옵저버블로 정의
  const url$ = of(`${baseUrl}/libraries/${libraryId}`);
  const headers$ = of({
    "Content-Type": "application/json",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJicmlxdWUiLCJpZCI6ImV1bmp1Iiwicm9sZV9jZCI6IlJfTVNUIiwidHlwZSI6ImluIiwiY3JlX2R0IjoxNTg5NTAyOTcyNjY1fQ.ecl_mMyjPaSLZBSfnnVcCmB0J4GiAK1DtdSUbuC5lWI",
  });

  return forkJoin({
    url: url$,
    headers: headers$,
  }).pipe(
    tap(({ url, headers }) =>
      log(`${LOG_PREFIX}[readLibrary$]`, url, libraryId, headers)
    ),
    map(({ url, headers }) => new Request(url, { headers })),
    switchMap(fromFetch),
    switchMap(processResponse$)
  );
};
