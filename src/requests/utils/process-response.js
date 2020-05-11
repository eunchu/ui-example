import { from } from "rxjs";
import { tap } from "rxjs/operators";

export const processResponse$ = (response) =>
  from(response.json()).pipe(
    tap((json) => {
      if (json.status_code < 200 || json.status_code >= 300)
        throw new Error(json.message);
    })
  );
