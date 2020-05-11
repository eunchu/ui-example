import React, { useEffect, useState } from "react";
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
        // 필요한 정보만을 mapping합니다.
        switchMap(from),
        map((response) => ({
          id: response.id,
          name: response.lib_nm,
        })),
        toArray()
      )
      .subscribe(
        // mapping한 library목록을 상태로 저장합니다.
        changeLibraries,
        (error) => console.log(error.message)
      );
    return () => subscription.unsubscribe();
  }, []);

  return <LibraryListPresenter libraries={libraries} />;
};

LibraryList = withErrorBoundary(LibraryList);

export default LibraryList;
