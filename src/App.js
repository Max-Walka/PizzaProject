import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Maxs Pizza"),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description:
        "Tomato sauce, mozzarella cheese, and slices of pepperoni, a spicy Italian-American sausage.",
    }),
    React.createElement(Pizza, {
      name: "Margherita",
      description:
        "Seasoned with hand-crushed peeled tomatoes, mozzarella, fresh basil leaves, and extra virgin olive oil.",
    }),
    React.createElement(Pizza, {
      name: "MeatLovers",
      description:
        "Topped with a hearty combination of various meats, such as pepperoni, ham, sausage, and ground beef.",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
