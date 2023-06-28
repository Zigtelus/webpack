import React from "react";
import { Route, Routes } from "react-router-dom";

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
        <Routes>
          <Route path={'/first'} element={<Counter />} />
          <Route path={'/second'} element={
            <div>
              <React.Fragment>
                <Name />
                <Rikmorty />
              </React.Fragment>
            </div>}
          />
        </Routes>
      </Main>

      <div>footer</div>
    </div>
  }
}



export default App;
