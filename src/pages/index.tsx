import React from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";

import Counter from "../components/counter";
import Name from "../components/name";
import Rikmorty from "../components/rikmorty";
import Main from "./main";
import Header from "./header";


interface Props extends RouteComponentProps { //необходимо указать для корректной работы withRouter с TS
}

class App extends React.Component<Props> {

  render() {
    return <div>
      <Header />

      <Main>
        <Switch>
          <Route exact path={'/first'} component={Counter} />
          <Route path={'/first/:id'} render={() => <div> page with ID</div>} />

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



export default withRouter(App);
