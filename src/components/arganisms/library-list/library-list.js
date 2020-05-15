import React, { useEffect, useState, useCallback } from "react";
import { from } from "rxjs";
import { map, switchMap, toArray } from "rxjs/operators";

import { withErrorBoundary } from "../../../hocs";
import { library } from "../../../requests";

import LibraryListPresenter from "./library-list.presenter";

let LibraryList = () => {
  const [libraries, changeLibraries] = useState(new Map());

  useEffect(() => {
    const subscription = library
      .listLibraries$(6, false)
      .pipe(
        switchMap(from),
        map((response) => ({
          id: response.id,
          name: response.lib_nm,
        })),
        toArray()
      )
      .subscribe(changeLibraries, (error) => console.log(error.message));
    return () => subscription.unsubscribe();
  }, []);

  const onClickLibrary = useCallback((event, { id }) => {}, []);

  return (
    <LibraryListPresenter
      libraries={libraries}
      onClickLibrary={onClickLibrary}
    />
  );
};

LibraryList = withErrorBoundary(LibraryList);

export default LibraryList;
