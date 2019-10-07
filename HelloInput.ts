import { Stream } from "xstream";
import { DOMSource, VNode, div, form, label, input, h1 } from "@cycle/dom";

type Props = {
  className: string;
};

type Sources = {
  DOM: DOMSource;
  props: Props;
};

type Sinks = {
  DOM: Stream<VNode>;
};

export default function HelloInput({ DOM, props }: Sources): Sinks {
  const name$ = DOM.select(props.className)
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
            input(props.className, {
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
