import React from "react";
import { Route, Switch } from "react-router-dom";

import Counter from "../components/counter";
import Name from "../components/name";
import Rikmorty from "../components/rikmorty";
import Main from "./main";
import Header from "./header";


class App extends React.Component {

  render() {
    return <div>
      <Header />

      <Main>
        <Switch>
          <Route path={'/first'} component={Counter} />
          <Route path={'/second'} render={() =>
            <div>
              <React.Fragment>
                <Name />
                <Rikmorty />
              </React.Fragment>
            </div>}
          />
        </Switch>
      </Main>

      <div>footer</div>
    </div>
  }
}



export default App;
