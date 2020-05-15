import React, { useEffect, useState, useCallback } from "react";
import { from, of } from "rxjs";
import { map, switchMap, toArray, filter } from "rxjs/operators";

import { withErrorBoundary } from "../../../hocs";
import { library } from "../../../requests";

import LibraryListPresenter from "./library-list.presenter";

let LibraryList = () => {
  const [libraries, changeLibraries] = useState(new Map());
  const [currentLibrary, changeCurrentLibrary] = useState(null);

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

  const onClickLibrary = useCallback((event, { id }) => {
    const subscription = of(id)
      .pipe(
        filter((id) => id !== null),
        switchMap(library.readLibrary$),
        // 필요한 정보만 매핑
        map((library) => ({
          id: library.id,
          createDate: library.cre_dt,
          createUser: library.cre_user,
          desc: library.lib_desc,
        }))
      )
      .subscribe(changeCurrentLibrary, (error) => console.log(error.message));

    return () => subscription.unsubscribe();
  }, []);

  return (
    <LibraryListPresenter
      libraries={libraries}
      // 상태전달
      currentLibrary={currentLibrary}
      onClickLibrary={onClickLibrary}
    />
  );
};

LibraryList = withErrorBoundary(LibraryList);

export default LibraryList;
