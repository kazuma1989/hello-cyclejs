import { Observable } from "xstream";
import { run } from "@cycle/run";
import {
  makeDOMDriver,
  DOMSource,
  VNode,
  div,
  form,
  label,
  input,
  h1
} from "@cycle/dom";

type Sources = {
  DOM: DOMSource;
};

type Sinks = {
  DOM: Observable<VNode>;
};

function main({ DOM }: Sources): Sinks {
  const name$ = DOM.select("input")
    .events("input")
    .map(ev => (ev.target as HTMLInputElement).value)
    .startWith("");

  return {
    DOM: name$.map(name =>
      div(
        ".ui.container",
        {
          attrs: {
            style: "margin-top: 3rem;"
          }
        },
        [
          h1(".ui.header", [`Hello ${name || "Cycle.js"}!`]),
          form(".ui.form", [
            div(".field", [
              label(["Name"]),
              input({
                attrs: {
                  type: "text"
                }
              })
            ])
          ])
        ]
      )
    )
  };
}

const drivers = {
  DOM: makeDOMDriver("#app")
};

run(main, drivers);
