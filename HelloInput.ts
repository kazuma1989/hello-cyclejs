import { Stream } from "xstream";
import { DOMSource, VNode, div, form, label, input, h1 } from "@cycle/dom";

type Sources = {
  DOM: DOMSource;
};

type Sinks = {
  DOM: Stream<VNode>;
};

export default function HelloInput({ DOM }: Sources): Sinks {
  const name$ = DOM.select("input")
    .events("input")
    .map(ev => (ev.target as HTMLInputElement).value)
    .startWith("");

  return {
    DOM: name$.map(name =>
      div([
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
      ])
    )
  };
}
