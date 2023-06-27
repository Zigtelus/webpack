import React from "react";
import Counter from "../components/counter/index.tsx";
import Name from "../components/name/index.tsx";
import Rikmorty from "../components/rikmorty/index.tsx";
import Main from "./main/index.tsx";
import { Route, Routes } from "react-router-dom";
import Header from "./header/index.tsx";


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
