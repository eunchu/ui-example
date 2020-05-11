import { listLibraries$ as _listLibraries$ } from "./list-libraries";

export const factory = ({ baseUrl, log, processResponse$ }) => {
  const dependencies = {
    baseUrl: "http://192.168.0.92:9082/ba/lib",
    log,
    processResponse$,
  };

  const listLibraries$ = _listLibraries$(dependencies);

  return {
    listLibraries$,
  };
};
