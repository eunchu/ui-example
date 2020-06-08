import React, { useState, useCallback, useEffect } from "react";
import { of } from "rxjs";

import { withErrorBoundary } from "../../hocs";
import { library } from "../../requests";

import MainPagePresenter from "./main-page.presenter";
import { filter, switchMap } from "rxjs/operators";

// lang 정보를 가지고 version정보를 호출합니다.
let MainPage = () => {
  const [lang, changeLang] = useState("R");
  const [versions, changeVersions] = useState([]);

  useEffect(() => {
    const language = lang === "R" ? "r" : "python";

    const subscription = of(language)
      .pipe(
        filter((lang) => lang !== null),
        switchMap(library.readLibraryLanguageVersion$)
      )
      .subscribe(
        (responce) => changeVersions(responce),
        (error) => console.log(error)
      );

    return () => subscription.unsubscribe();
  }, [lang]);

  // onChange 이벤트가 발생할 때마다, 변경된 lang정보를 state에 저장합니다.
  const onChangeLang = useCallback((lang) => changeLang(lang), []);

  return (
    <MainPagePresenter
      lang={lang}
      versions={versions}
      onChangeLang={onChangeLang}
    />
  );
};

MainPage = withErrorBoundary(MainPage);

export default MainPage;
