import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import TodosProvider from "./Providers/todosProvider";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <Switch>
      <Route exact path="/home">
        <TodosProvider>
          <Home />
        </TodosProvider>
      </Route>
      <Route>
        <Redirect to="/home" />;
      </Route>
    </Switch>
  );
}
