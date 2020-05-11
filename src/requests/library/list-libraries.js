import { of } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap, tap, map } from "rxjs/operators";

const LOG_PREFIX = "[requests/library/list-libraries.js]";

export const listLibraries$ = ({ baseUrl, log, processResponse$ }) => (
  parentId,
  isBasic
) => {
  const url = `${baseUrl}/categories/${parentId}/libraries?basic_yn=${isBasic}`;

  return of(url).pipe(
    tap((url) => log(`${LOG_PREFIX}[listLibraries$]`, url, parentId)),
    map(
      (url) =>
        new Request(url, {
          headers: {
            "Content-Type": "application/json",
            // 플랫폼 로그인 후, token정보를 넣어주세요.
            token:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJicmlxdWUiLCJpZCI6ImV1bmp1Iiwicm9sZV9jZCI6IlJfTVNUIiwidHlwZSI6ImluIiwiY3JlX2R0IjoxNTg5MTc0Njk5OTk5fQ.PD_XHbRZdvrv_6EP4akQ0q5yGpfb8qg3IIo_XLIDV9Q",
          },
        })
    ),
    switchMap(fromFetch),
    switchMap(processResponse$)
  );
};
