import xs, { Observable } from "xstream";
import { run } from "@cycle/run";
import { makeDOMDriver, DOMSource, VNode, div } from "@cycle/dom";

type Sources = {
  DOM: DOMSource;
};

type Sinks = {
  DOM: Observable<VNode>;
};

function main({ DOM }: Sources): Sinks {
  return {
    DOM: xs.of(div(".hello", ["Hello world"]))
  };
}

const drivers = {
  DOM: makeDOMDriver("#app")
};

run(main, drivers);
