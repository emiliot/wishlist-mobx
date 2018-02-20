import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { onSnapshot, getSnapshot, addMiddleware } from "mobx-state-tree";

import { Group } from "./models/Group";

let initialState = {
  users: {
    a342: {
        id: "a342",
        name: "Homer",
        gender: "m"
    },
    "5fc2": {
        id: "5fc2",
        name: "Marge",
        gender: "f"
    },
    "663b": {
        id: "663b",
        name: "Bart",
        gender: "m"
    },
    "65aa": {
        id: "65aa",
        name: "Maggie",
        gender: "f"
    },
    ba32: {
        id: "ba32",
        name: "Lisa",
        gender: "f"
    }
  }
}

let group = Group.create(initialState)

addMiddleware(group, (call, next) => {
  console.log(`[${call.type}, ${call.name}]`)
  next(call)
})

function renderApp () {
  ReactDOM.render(<App group={group} />, document.getElementById("root"))
}

renderApp()

if (module.hot) {
  module.hot.accept(["./App"], () => {
    // new components
    renderApp()
  })

  module.hot.accept(["./models/Group"], () => {
    // new model definitions
    const snapshot = getSnapshot(group)
    group = Group.create(snapshot)
    renderApp()
  })
}
registerServiceWorker()
