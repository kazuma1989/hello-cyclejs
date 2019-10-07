import xs, { Observable } from "xstream";
import { run } from "@cycle/run";
import { makeDOMDriver, DOMSource, VNode } from "@cycle/dom";

type Sources = {
  DOM: DOMSource;
};

type Sinks = {
  DOM: Observable<VNode>;
};

function main({ DOM }: Sources): Sinks {
  return null;
}

const drivers = {
  DOM: makeDOMDriver("#app")
};

run(main, drivers);
